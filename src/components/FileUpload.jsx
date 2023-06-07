import React from "react";
import * as xlsx from "xlsx";
import { useState, useEffect } from "react";
import DropZone from "./DropZone";
import Spreadsheet from "react-spreadsheet";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const FileUpload = () => {
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);

  const readUploadFile = async (e) => {
    let fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setCols(resp.cols);
        setRows(resp.rows);
      }
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
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
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
