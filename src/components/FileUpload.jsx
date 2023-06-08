import React, { useRef } from "react";

import { useState, useEffect } from "react";
import DropZone from "./DropZone";

import { OutTable, ExcelRenderer } from "react-excel-renderer";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FileUpload = () => {
  const ref = useRef();
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);

  const modifidData = [];

  useEffect(() => {
    const data1 = Object.keys(rows).map((key) => {
      const row = rows[key];
      const rowValues = row.filter((value) => value !== "empty");

      return {
        sno: key,
        round: rowValues[0],
        unit1: rowValues[1],
        unit2: rowValues[2],
        // Add more key-value pairs as needed for other columns
      };
    });
    setData(data1);
  }, [cols, rows]);

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
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("l", "px", "a4");
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

      <button onClick={ConverToPdf}>Download</button>
      <div id="table" className=" overflow-y-scroll">
        <OutTable
          data={rows}
          columns={cols}
          tableClassName="ExcelTable2010"
          tableHeaderRowClass="heading"
        />
      </div>
      <div>
        {modifidData.forEach((row, index) => {
          console.log(`Row ${index + 1}:`);
          Object.entries(row).forEach(([key, value]) => {
            console.log(`- ${key}: ${value}`);
            <p>
              - ${key}: ${value}
            </p>;
          });
          console.log("------------------------");
        })}
      </div>
    </div>
  );
};

export default FileUpload;
