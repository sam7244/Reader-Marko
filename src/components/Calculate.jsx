import React from "react";

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
  ["CO1", 4.5, 1.8, 2.7, 4.5],
  ["CO2", 4.5, 1.8, 2.7, 4.5],
  ["CO3", 5, 2, 3, 5],
  ["CO4", 5, 2, 3, 5],
  ["CO5", 5, 2, 3, 5],
];

const calculateTable2Data = (table2Data, table4Data) => {
  const updatedTable2Data = [];

  for (let i = 0; i < table2Data.length; i++) {
    const row = [...table2Data[i]];

    if (i > 1) {
      for (let j = 1; j < row.length; j++) {
        if (row[j] === "H" || row[j] === "M" || row[j] === "L") {
          const co = row[0];
          const coAttainment = table4Data.find((row) => row[0] === co)[1];
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
  }

  return updatedTable2Data;
};
// Calculate the updated Table 2 data
const updatedTable2Data = calculateTable2Data(table2Data, table4Data);

const Calculate = () => {
  console.log(updatedTable2Data);
  return <div>Calculate</div>;
};

export default Calculate;
