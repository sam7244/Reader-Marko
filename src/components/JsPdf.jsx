import React from "react";
import jsPDF from "jspdf";

const jsPdf = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Iterate over each row in the data array
    data.forEach((row, rowIndex) => {
      // Convert the row to a string
      const rowStr = row.map((cell) => String(cell));

      // Set the y-coordinate for the current row
      const y = (rowIndex + 1) * 10;

      // Add the row to the PDF
      doc.text(10, y, rowStr.join(" "));
    });

    // Save the PDF file
    doc.save("output.pdf");
  };

  return (
    <div>
      <h1>Convert Data to PDF</h1>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default jsPdf;
