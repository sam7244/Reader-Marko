import React from "react";
import "./ExcelTable.module.css";

const ExcelTable = ({ rows }) => {
  const renderTable = (rows) => {
    console.log(rows);
    //return (
    //   <table>
    //     <thead>
    //       <tr>
    //         {rows[0].map((header, index) => (
    //           <th key={index}>{header}</th>
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {rows.slice(1).map((row, rowIndex) => (
    //         <tr key={rowIndex}>
    //           {row.map((cell, cellIndex) => (
    //             <td key={cellIndex}>{cell}</td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //);
  };

  return <div className="excel-table-container">{renderTable(rows)}</div>;
};

export default ExcelTable;
