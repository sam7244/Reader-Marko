import React from "react";
import * as xlsx from "xlsx";
import { useState, useEffect } from "react";
import DropZone from "./DropZone";
import Spreadsheet from "react-spreadsheet";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import CheckableTag from "antd/es/tag/CheckableTag";

const FileUpload = () => {
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);

  const modifidData = [];

  useEffect(() => {
    // console.log("this is the rows", rows);
    // console.log("this is the cols", cols);
    // console.log(modifidData);
  }, [cols, rows]);

  const readUploadFile = async (e) => {
    let fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setRows(resp.row);
        setCols(resp.cols);
        const data = resp.rows.map((row, idx) => {
          const sum = (Number(row[2]) || 0) + (Number(row[3]) || 0);

          const newRow = [...row, idx === 0 ? "sum" : sum];

          return newRow;
        });
        setRows(data);

        console.log(cols.push({ name: "E", key: 4 }));
        setCols(cols);
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
      <div className="max-h-[60vh] overflow-y-scroll">
        <OutTable
          data={rows}
          columns={cols}
          tableClassName="ExcelTable2010"
          tableHeaderRowClass="heading"
        />
      </div>
      <div>
        {}

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
