import React from "react";

const dummy = () => {
  return <div>dummy</div>;
};

export default dummy;

// doc.addPage();
//addHeading("New Page");

// Generate the rotated table on a single page
// const generateRotatedTable = (data) => {
//   // Convert the data into a format suitable for rendering as a rotated table
//   const rotatedData = [];
//   const maxColumns = Math.max(...data.map((row) => row.length));

//   for (let colIndex = 0; colIndex < maxColumns; colIndex++) {
//     const rotatedRow = [];
//     for (let rowIndex = data.length - 1; rowIndex >= 0; rowIndex--) {
//       const cellData = data[rowIndex][colIndex] || ""; // Handle empty cells
//       rotatedRow.push(cellData);
//     }
//     rotatedData.push(rotatedRow);
//   }

//   // Render the rotated table using autoTable plugin
//   doc.autoTable({
//     head: [[""]], // Use an empty header row
//     body: rotatedData,
//     startY,
//     theme: "grid",
//     styles: {
//       fontSize: 7,
//       cellPadding: 5,
//       textColor: [1, 1, 0],
//     },
//     columnStyles: {
//       0: { cellWidth: "auto" },
//       // Add more column styles as needed
//     },
//     didDrawCell: function (data) {
//       const cellContent = data.cell.raw || "";
//       const cellX = data.cell.x;
//       const cellY = data.cell.y;
//       const cellWidth = data.cell.width;
//       const cellHeight = data.cell.height;

//       doc.setTextColor(0, 0, 0);
//       doc.setFontSize(7);
//       // doc.text(cellContent, cellX + cellWidth / 2, cellY + cellHeight / 2, {
//       //   align: "center",
//       //   baseline: "middle",
//       //   angle: -90,
//       // });
//     },
//     didDrawPage: function (data) {
//       const { table, pageNumber } = data;
//       const totalPages = doc.internal.getNumberOfPages();

//       if (pageNumber === totalPages) {
//         // Check if the table height exceeds the available space on the page
//         if (table.height > doc.internal.pageSize.getHeight() - 20) {
//           doc.addPage(); // Add a new page
//           startY = 20; // Reset the startY for the new page
//         }
//       }
//     },
//   });

//   // Update the startY for the next table
//   startY += doc.internal.pageSize.getHeight() - 20;
// };

// // Generate the rotated table
// generateRotatedTable([
//   mappedData[0],
//   mappedData[1],
//   ...mappedData.slice(2),
// ]);
