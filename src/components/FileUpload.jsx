import React from "react";
import * as xlsx from "xlsx";
import { useState, useEffect } from "react";
import DropZone from "./DropZone";

const FileUpload = () => {
  const [data, setData] = useState([]);
  const [sums, setSums] = useState(null);
  const [group, setGroup] = useState({});

  useEffect(() => {
    // console.log(group);
    console.log(data);
  }, [data, sums, group]);

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
      return result;
    }, {});

    setGroup(groupedData);

    const maxScoresUnit1 = Object.entries(groupedData).reduce(
      (result, [studentName, studentData]) => {
        const maxScoreUnit1 = Math.max(
          ...studentData.map((data) => data["1a"])
        );
        result[studentName] = maxScoreUnit1;
        return result;
      },
      {}
    );

    const maxScoresUnit2 = Object.entries(groupedData).reduce(
      (result, [studentName, studentData]) => {
        const maxScoreUnit1 = Math.max(
          ...studentData.map((data) => data["1b"])
        );
        result[studentName] = maxScoreUnit1;
        return result;
      },
      {}
    );

    const sums = Object.entries(groupedData).reduce(
      (result, [studentName, studentData]) => {
        const sum = maxScoresUnit1[studentName] + maxScoresUnit2[studentName];
        result[studentName] = sum;
        return result;
      },
      {}
    );

    setSums(sums);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>

      {/* // <DropZone /> */}
    </div>
  );
};

export default FileUpload;
