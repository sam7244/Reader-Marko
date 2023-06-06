import React from "react";
import * as xlsx from "xlsx";
import { useState, useEffect } from "react";
import DropZone from "./DropZone";

const FileUpload = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        setData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }

    const groupedData = data.reduce((result, current) => {
      const studentName = current.sno;

      if (!result[studentName]) {
        result[studentName] = [];
      }

      result[studentName].push(current);
      console.log(result);
      return result;
    }, {});

    setData("this is the data", groupedData);
  };

  return (
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
  );
};

export default FileUpload;
