import { useEffect } from "react";
import { FileStateContext } from "./Context";


const weights = {
  H: 1,
  M: 0.6,
  L: 0.4,
};

const table2Data = [
  [
    "Course Outcomes",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PO",
    "PSO",
    "PSO",
  ],
  [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2],
  [
    "CO1",
    "H",
    "H",
    null,
    null,
    "H",
    null,
    null,
    null,
    "M",
    null,
    null,
    null,
    "H",
    "H",
  ],
  [
    "CO2",
    "H",
    "H",
    null,
    null,
    "H",
    null,
    null,
    null,
    "H",
    null,
    null,
    null,
    "H",
    "H",
  ],
  [
    "CO3",
    "H",
    "H",
    null,
    null,
    "H",
    null,
    null,
    null,
    "M",
    null,
    null,
    null,
    "H",
    "H",
  ],
  [
    "CO4",
    "H",
    "H",
    null,
    null,
    "H",
    null,
    null,
    null,
    "H",
    null,
    null,
    null,
    "H",
    "H",
  ],
  [
    "CO5",
    "H",
    "H",
    null,
    null,
    "H",
    null,
    null,
    null,
    "M",
    null,
    null,
    null,
    "H",
    "H",
  ],
];

const table4Data = [
  ["Course Outcomes", "CO Attainment", "Low", "Medium", "High"],
];

const calculateTable2Data = (AvgAttainent) => {
  //console.log("from the table2Dtata", AvgAttainent);
  const {} = FileStateContext();
  const updatedTable2Data = [];

  for (let i = 1; i <= AvgAttainent.length; i++) {
    const low = AvgAttainent[i - 1] * 0.4;
    const medium = AvgAttainent[i - 1] * 0.6;
    const high = AvgAttainent[i - 1] * 1;
    table4Data.push([
      "CO" + i,
      AvgAttainent[i - 1],
      low.toFixed(2),
      medium.toFixed(2),
      high.toFixed(2),
    ]);
  }

  console.log("table 4 data is", table4Data);

  for (let i = 0; i < table2Data.length; i++) {
    const row = [...table2Data[i]];

    console.log("this is the row", i, "working fine");

    if (i > 1) {
      for (let j = 1; j < row.length; j++) {
        if (row[j] === "H" || row[j] === "M" || row[j] === "L") {
          // console.log("this is the row", row);

          const co = row[0];

          const coAttainment = table4Data.find((row) => row[0] === co)[1];
          //  console.log("this is the co attainment", coAttainment);
          const lowValue = table4Data.find((row) => row[0] === co)[2];
          const mediumValue = table4Data.find((row) => row[0] === co)[3];
          const highValue = table4Data.find((row) => row[0] === co)[4];

          if (row[j] === "H") {
            row[j] = highValue;
          } else if (row[j] === "M") {
            row[j] = mediumValue;
          } else if (row[j] === "L") {
            row[j] = lowValue;
          }
        }
      }
    }

    updatedTable2Data.push(row);
    // console.log(updatedTable2Data);
  }

  //console.log("this is the table unlimited data", updatedTable2Data);

  //Create a new row to store the average values
  const avgRow = Array.from(
    { length: updatedTable2Data[0].length },
    (_, index) => {
      return index === 0 ? "Average" : null;
    }
  );

  // Calculate the average for each column and add it to the average row
  for (let col = 1; col < updatedTable2Data[0].length; col++) {
    let sum = 0;
    let count = 0;
    for (let row = 2; row < updatedTable2Data.length; row++) {
      // Start from row 3 to exclude row 2
      if (updatedTable2Data[row][col] !== null) {
        sum += parseInt(updatedTable2Data[row][col]);
        count++;
      }
    }
    const average = count > 0 ? sum / count : null;
    avgRow[col] = average;
  }

  // Add the average row to updatedTable2Data
  updatedTable2Data.push(avgRow);

  // setmappedData(updatedTable2Data);
  //console.log(updatedTable2Data);
  //console.log("this is the data", updatedTable2Data);
  return updatedTable2Data;
};

export default calculateTable2Data;
