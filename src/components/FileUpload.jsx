import React from "react";
import html2canvas from "html2canvas";
import { useState, useEffect } from "react";
import DropZone from "./DropZone";
import { ExcelRenderer } from "react-excel-renderer";
import { toast } from "react-hot-toast";
import jsPDF from "jspdf";

import ExcelTable from "./ExcelTable";
import OutputTableSec from "./OutputTableSec";
import BarGraph from "./BarGraph";

import "jspdf-autotable";
import { client } from "../../lib/client";
import data from "../../utils/getData";
import OutputTable from "./OutputTable";

const FileUpload = ({ id }) => {
  const [Threshold, setThreshold] = useState(0);
  const [setsaveThreshold, setSetsaveThreshold] = useState(Threshold);
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [attainment, setAttainment] = useState([]);

  const readUploadFile = async (e) => {
    let fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
        toast.error("Oops Something Went Wrong!");
      } else {
        const { rows, cols } = resp;
        cols.push({ name: "D", key: 3 });
        setRows(rows);
        setCols(cols);
        setIsUploaded(true);
      }
    });
  };

  const uploadPDFToSanity = async (pdfFile) => {
    // Create a new Sanity document for the PDF
    const document = await client.create({
      _type: "docs", // Adjust the type name according to your Sanity schema
      // Add any other fields you want to store with the PDF document
    });

    // Upload the PDF file to Sanity's file storage
    const asset = await client.assets.upload("file", pdfFile, {
      filename: "output.pdf",
      contentType: "application/pdf",
      // Set any other metadata properties you need
    });

    // Associate the uploaded asset with the PDF document
    await client
      .patch(document._id)
      .set({
        doc: {
          _type: "file",
          asset: { _type: "reference", _ref: asset._id },
        },
        lectureName: {
          _type: "reference",
          _ref: localStorage.getItem("user"),
        },
      })
      .commit();
  };

  const generatePDF = async () => {
    const doc = new jsPDF();

    const pdfBlob = doc.output("blob");

    const addHeading = (heading) => {
      doc.setFontSize(16);
      const textWidth =
        (doc.getStringUnitWidth(heading) * doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      const textOffset = (doc.internal.pageSize.getWidth() - textWidth) / 2;
      doc.text(heading, textOffset, 15);
    };

    addHeading("Table Given by the god");
    doc.autoTable({
      head: [rows[0]], // Use the first row as table headers
      body: rows.slice(1), // Exclude the first row from table body
      startY: 20, // Set the initial y-coordinate for the table
      theme: "grid",

      styles: {
        fontSize: 12,
        cellPadding: 5,
        textColor: [1, 1, 0],
      },
      columnStyles: {
        // Add more column styles as needed
      },
      didDrawPage: function (rows) {
        const { table, pageNumber } = rows;
        const totalPages = doc.internal.getNumberOfPages();

        if (pageNumber === totalPages) {
          // Check if the table height exceeds the available space on the page
          if (table.height > doc.internal.pageSize.getHeight() - 20) {
            doc.addPage(); // Add a new page
            doc.autoTable({
              head: [rows[0]], // Repeat the table headers on the new page
              body: rows.slice(1), // Use the remaining body data
              startY: 20, // Set the initial y-coordinate for the table on the new page

              styles: {
                fontSize: 5,
                cellPadding: 10,
                textColor: [0, 0, 0],
              },
              columnStyles: {
                0: { cellWidth: "auto" },
                1: { cellWidth: "auto" },
                2: { cellWidth: "auto" },
                // Add more column styles as needed
              },
            });
          }
        }
      },
    });

    doc.addPage();

    addHeading("Attainment Table");
    doc.autoTable({
      head: [attainment[0]], // Use the first row as table headers
      body: attainment.slice(1), // Exclude the first row from table body
      startY: 20, // Set the initial y-coordinate for the table
      theme: "grid",

      styles: {
        fontSize: 12,
        cellPadding: 5,
        textColor: [1, 1, 0],
      },
      columnStyles: {
        // Add more column styles as needed
      },
      didDrawPage: function (attainment) {
        const { table, pageNumber } = attainment;
        const totalPages = doc.internal.getNumberOfPages();

        if (pageNumber === totalPages) {
          // Check if the table height exceeds the available space on the page
          if (table.height > doc.internal.pageSize.getHeight() - 20) {
            doc.addPage(); // Add a new page
            doc.autoTable({
              head: [attainment[0]], // Repeat the table headers on the new page
              body: attainment.slice(1), // Use the remaining body data
              startY: 20, // Set the initial y-coordinate for the table on the new page

              styles: {
                fontSize: 5,
                cellPadding: 10,
                textColor: [0, 0, 0],
              },
              columnStyles: {
                0: { cellWidth: "auto" },
                1: { cellWidth: "auto" },
                2: { cellWidth: "auto" },
                // Add more column styles as needed
              },
            });
          }
        }
      },
    });

    doc.addPage();

    addHeading("Bar Graph");
    // Capture the graph element as an image
    const graphElement = document.getElementById("graph");
    const canvas = await html2canvas(graphElement);
    const imageData = canvas.toDataURL("image/png");

    // Calculate the PDF dimensions
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    // Calculate the image dimensions
    const imageWidth = pdfWidth - 10;
    const imageHeight = pdfHeight / 4 + 10;

    // Calculate the image position in the middle of the PDF
    const imageX = (pdfWidth - imageWidth) / 2;
    const imageY = 25;

    // Add the image to the PDF
    doc.addImage(imageData, "PNG", imageX, imageY, imageWidth, imageHeight);

    // Save the PDF
    const pdf = doc.output("blob");
    const pdfFile = new File([pdf], "output.pdf", {
      type: "application/pdf",
    });

    uploadPDFToSanity(pdfFile);

    // uploadPDFToSanity(pdfFile);
    doc.save("output.pdf");

    toast.success("Pdf Downloaded Successfully");
  };

  const handleChange = () => {
    // Create a map to track rows with the same RollNo
    const rollNoMap = new Map();

    // Iterate over the data rows starting from index 1
    for (let i = 1; i < rows.length; i++) {
      const [rollNo, u1, u2] = rows[i];

      // Check if the RollNo already exists in the map
      if (rollNoMap.has(rollNo)) {
        const existingRow = rollNoMap.get(rollNo);

        // Compare u1 and u2 values and update if necessary
        if (u1 > existingRow.u1) {
          existingRow.u1 = u1;
        }
        if (u2 > existingRow.u2) {
          existingRow.u2 = u2;
        }
      } else {
        // If the RollNo doesn't exist, add it to the map
        rollNoMap.set(rollNo, { u1, u2 });
      }
    }
    const updatedData = rows.map((row) => {
      if (row[0] === "RollNo" && row.at(-1) !== "Sum") {
        // If it's the header row, add the 'Sum' column header
        return [...row, "Sum"];
      } else if (row.length < 4) {
        const rollNo = row[0];
        const maxMarks = rollNoMap.get(rollNo);
        const sum = maxMarks.u1 + maxMarks.u2;
        return [...row, sum];
      }
      return row;
    });

    if (cols.length === 4) cols.push({ name: "E", key: 4 });

    setCols(cols);

    setRows(updatedData);
  };

  return (
    <div className=" p-10 h-screen  overflow-hidden">
      {!isUploaded && (
        <div
          style={{ borderRadius: "9px" }}
          className="flex flex-col w-full p-4 gap-2 max-w-4xl mx-auto border-4 border-dashed  items-center justify-center"
        >
          <p className="font-bold text-xl  animate-bounce">Upload File Below</p>

          <input
            className=" py-5 text-md  font-semibold px-4 border-2 bg-gray-200 border-dotted "
            style={{ borderRadius: "10px" }}
            type="file"
            name="upload"
            id="upload"
            placeholder="Choose File"
            onChange={readUploadFile}
          />

          {/*  */}
        </div>
      )}

      {isUploaded && (
        <div className=" grid md:grid-cols-2">
          <OutputTable
            Threshold={Threshold}
            setsaveThreshold={setsaveThreshold}
            setThreshold={setThreshold}
            rows={rows}
            setIsUploaded={setIsUploaded}
            handleChange={handleChange}
            isUploaded={isUploaded}
          />
          <div className="flex flex-col">
            <div
              className="flex h-1/2 justify-center items-center  "
              id="graph"
            >
              <BarGraph />
            </div>
            <div className=" flex flex-col md:flex-row h-1/2">
              <div className=" flex w-1/2 justify-center items-center">
                <OutputTableSec
                  rows={rows}
                  isUploaded={isUploaded}
                  setIsUploaded={setIsUploaded}
                  handleChange={handleChange}
                  attainment={attainment}
                  setAttainment={setAttainment}
                />
              </div>
              <div className="flex w-1/2 justify-center items-center">
                <OutputTableSec
                  rows={rows}
                  isUploaded={isUploaded}
                  setIsUploaded={setIsUploaded}
                  handleChange={handleChange}
                  attainment={attainment}
                  setAttainment={setAttainment}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <button onClick={generatePDF}>Generate PDF</button>
      </div>

      {/* 
     
      <div
        id="table"
        className="max-h-[400px] table-auto overflow-y-scroll w-[30vw]   mx-auto   "
      >
        <OutTable
          data={rows}
          columns={cols}
          tableClassName="w-[30vw] border-separate mx-auto bg-[#c6e6f5]    table-auto font-bold text-center     "
        />
      </div>

      <div>
        <ExcelTable rows={rows} />
      </div>
     */}
    </div>
  );
};

export default FileUpload;
