import React, { useRef } from "react";

import { useState, useEffect } from "react";
import DropZone from "./DropZone";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "jspdf-autotable";

const FileUpload = () => {
  const ref = useRef();
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);

  const modifidData = [];

  const readUploadFile = async (e) => {
    let fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setRows(resp.rows);
        setCols(resp.cols);
      }
    });
  };

  const generatePDF = async () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [rows[0]], // Use the first row as table headers
      body: rows.slice(1), // Exclude the first row from table body
      startY: 20, // Set the initial y-coordinate for the table
      styles: {
        fontSize: 12,
        cellPadding: 5,
        textColor: [0, 0, 0],
      },
      columnStyles: {
        0: { cellWidth: "auto" }, // Set the first column width to 'auto'
        1: { cellWidth: "auto" },
        2: { cellWidth: "auto" },
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
              head: [table.head], // Repeat the table headers on the new page
              body: table.body, // Use the remaining body data
              startY: 20, // Set the initial y-coordinate for the table on the new page
              styles: {
                fontSize: 5,
                cellPadding: 5,
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

    // Save the PDF
    doc.save("output.pdf");
  };

  const handleChange = () => {
    const data = rows.map((row, idx) => {
      const sum = (Number(row[2]) || 0) + (Number(row[3]) || 0);
      const newRow = [...row, idx === 0 ? "sum" : sum];
      return newRow;
    });
    setRows(data);

    console.log(cols.push({ name: "E", key: 4 }));
    setCols(cols);
  };
  const ConverToPdf = () => {
    const capture = document.querySelector("#table");
    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("Document.pdf");
    });
  };

  return (
    <div className=" p-10  overflow-hidden">
      <div className="flex flex-col p-4 gap-2  items-center justify-center">
        <p className="font-bold text-xl animate-bounce">Upload File Below</p>

        <input
          className=" py-5 text-md  font-semibold px-4 bg-gray-200 rounded-lg"
          type="file"
          name="upload"
          id="upload"
          placeholder="Choose File"
          onChange={readUploadFile}
        />
        <button onClick={handleChange}>Update</button>
      </div>
      {/* Render your table component here */}
      {/* <PDFViewer>
        <PDFComponent data={data} />
      </PDFViewer> */}
      {/* Render the PDF download button */}
      {/* <PDFDownloadButton data={data} /> */}
      {/* <button onClick={ConverToPdf}>Download</button> */}

      <div>
        <h1>Convert Data to PDF</h1>
        <button onClick={generatePDF}>Generate PDF</button>
      </div>

      <div id="table" className="h-[70vh] overflow-y-scroll">
        <OutTable
          data={rows}
          columns={cols}
          tableClassName="ExcelTable2010"
          tableHeaderRowClass="heading"
        />
      </div>
      <div>
        {}

        {/* {modifidData.forEach((row, index) => {
          console.log(`Row ${index + 1}:`);
          Object.entries(row).forEach(([key, value]) => {
            console.log(`- ${key}: ${value}`);
            <p>
              - ${key}: ${value}
            </p>;
          });
          console.log("------------------------");
        })} */}
      </div>
    </div>
  );
};

export default FileUpload;
