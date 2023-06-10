import React, { useRef } from "react";

import { useState, useEffect } from "react";
import DropZone from "./DropZone";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "jspdf-autotable";

const FileUpload = () => {
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);

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
    const pdfBlob = doc.output("blob");
    const pdfFile = new File([pdfBlob], "output.pdf", {
      type: "application/pdf",
    });

    doc.save("output.pdf");
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
      if (row[0] === "RollNo") {
        // If it's the header row, add the 'Sum' column header
        return [...row, "Sum"];
      } else {
        const rollNo = row[0];
        const maxMarks = rollNoMap.get(rollNo);
        const sum = maxMarks.u1 + maxMarks.u2;
        return [...row, sum];
      }
    });

    cols.push({ name: "D", key: 4 });
    setCols(cols);
    setRows(updatedData);
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
    </div>
  );
};

export default FileUpload;
