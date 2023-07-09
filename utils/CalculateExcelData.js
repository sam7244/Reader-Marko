// const data = [
//   [
//     "rollno",
//     "1a",
//     "1b",
//     "1c",
//     "2a",
//     "2b",
//     "2c",
//     "3a",
//     "3b",
//     "3c",
//     "4a",
//     "4b",
//     "4c",
//     "5a",
//     "5b",
//     "5c",
//     "6a",
//     "6b",
//     "6c",
//     "7a",
//     "7b",
//     "7c",
//     "8a",
//     "8b",
//     "8c",
//     "9a",
//     "9b",
//     "9c",
//     "10a",
//     "10b",
//     "10c",
//   ],
//   [
//     505352, 3, 7, 4, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 5, 5, 8, 5, 1, 1, 0, 0,
//     0, 9, 8, 0, 0, 0, 0,
//   ],
//   [
//     505352, 3, 7, 4, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 5, 5, 8, 5, 1, 1, 0, 0,
//     0, 9, 8, 0, 0, 0, 0,
//   ],
//   [
//     506241, 2, 0, 4, 0, 0, 0, 0, 0, 0, 10, 5, 5, 5, 10, 5, 0, 0, 0, 0, 0, 0, 2,
//     5, 10, 9, 10, 0, 0, 0, 0,
//   ],
//   [
//     506241, 2, 0, 4, 0, 0, 0, 0, 0, 0, 9, 4.5, 4.5, 5, 10, 4.5, 0, 0, 0, 0, 0,
//     0, 2, 4.5, 10, 9.5, 9.5, 0, 0, 0, 0,
//   ],
//   [
//     506242, 1, 5, 4, 0, 0, 0, 5, 1, 5, 6, 0, 0, 0, 9, 1, 5, 0, 1, 0, 0, 0, 0, 0,
//     0, 9, 6, 0, 0, 0, 0,
//   ],
//   [
//     506242, 1, 5, 4, 0, 0, 0, 5, 1, 5, 6, 0, 0, 0, 9, 1, 5, 0, 3, 0, 0, 0, 0, 0,
//     0, 9, 6, 0, 0, 0, 0,
//   ],
//   [
//     506243, 1, 5, 4, 0, 0, 0, 0, 0, 0, 8, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1,
//     8, 0, 0, 4, 0, 0, 0,
//   ],
//   [
//     506243, 1, 5, 4, 0, 0, 0, 0, 0, 0, 8, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1,
//     8, 0, 0, 7, 0, 0, 0,
//   ],
//   [
//     506244, 1, 0, 4, 0, 0, 0, 6, 2, 6, 0, 0, 0, 0, 0, 0, 5, 5, 10, 0, 0, 0, 5,
//     5, 10, 9, 10, 0, 0, 0, 0,
//   ],
//   [
//     506244, 1, 0, 4, 0, 0, 0, 6, 3, 6, 0, 0, 0, 0, 0, 0, 5, 5, 10, 0, 0, 0, 5,
//     5, 10, 9, 10, 0, 0, 0, 0,
//   ],
//   [
//     506245, 1, 6, 4, 0, 0, 0, 1, 3, 2, 0, 0, 0, 3, 9, 5, 0, 0, 0, 0, 0, 0, 5, 4,
//     9, 10, 10, 0, 0, 0, 0,
//   ],
//   [
//     506245, 1, 6, 4, 0, 0, 0, 1, 3, 2, 0, 0, 0, 3, 9, 5, 0, 0, 0, 0, 0, 0, 5, 4,
//     9, 10, 10, 0, 0, 0, 0,
//   ],
//   [
//     506246, 10, 5, 4, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 4, 3, 7, 4, 1, 5, 0,
//     0, 0, 8, 8, 0, 0, 0, 0,
//   ],
//   [
//     506246, 10, 5, 4, 0, 0, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 4, 3, 7, 4, 1, 5, 0,
//     0, 0, 8, 8, 0, 0, 0, 0,
//   ],
// ];
let marks = [["u1", "u2", "u3", "u4", "u5"]];

const calculateUnitScores = (rows) => {
  //console.log("ROWS", rows);

  marks = [["u1", "u2", "u3", "u4", "u5"]];

  const rollNoMap = new Map();

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const [
      rollNo,
      round,
      a1,
      b1,
      c1,
      a2,
      b2,
      c2,
      a3,
      b3,
      c3,
      a4,
      b4,
      c4,
      a5,
      b5,
      c5,
      a6,
      b6,
      c6,
      a7,
      b7,
      c7,
      a8,
      b8,
      c8,
      a9,
      b9,
      c9,
      a10,
      b10,
      c10,
    ] = row;

    if (rollNoMap.has(rollNo)) {
      const existingRow = rollNoMap.get(rollNo);

      if (a1 > existingRow.a1) {
        existingRow.a1 = a1;
      }
      if (b1 > existingRow.b1) {
        existingRow.b1 = b1;
      }
      if (c1 > existingRow.c1) {
        existingRow.c1 = c1;
      }
      if (a2 > existingRow.a2) {
        existingRow.a2 = a2;
      }
      if (b2 > existingRow.b2) {
        existingRow.b2 = b2;
      }
      if (c2 > existingRow.c2) {
        existingRow.c2 = c2;
      }
      if (a3 > existingRow.a3) {
        existingRow.a3 = a3;
      }
      if (b3 > existingRow.b3) {
        existingRow.b3 = b3;
      }
      if (c3 > existingRow.c3) {
        existingRow.c3 = c3;
      }
      if (a4 > existingRow.a4) {
        existingRow.a4 = a4;
      }
      if (b4 > existingRow.b4) {
        existingRow.b4 = b4;
      }
      if (c4 > existingRow.c4) {
        existingRow.c4 = c4;
      }
      if (a5 > existingRow.a5) {
        existingRow.a5 = a5;
      }
      if (b5 > existingRow.b5) {
        existingRow.b5 = b5;
      }
      if (c5 > existingRow.c5) {
        existingRow.c5 = c5;
      }
      if (a6 > existingRow.a6) {
        existingRow.a6 = a6;
      }
      if (b6 > existingRow.b6) {
        existingRow.b6 = b6;
      }
      if (c6 > existingRow.c6) {
        existingRow.c6 = c6;
      }
      if (a7 > existingRow.a7) {
        existingRow.a7 = a7;
      }
      if (b7 > existingRow.b7) {
        existingRow.b7 = b7;
      }
      if (c7 > existingRow.c7) {
        existingRow.c7 = c7;
      }
      if (a8 > existingRow.a8) {
        existingRow.a8 = a8;
      }
      if (b8 > existingRow.b8) {
        existingRow.b8 = b8;
      }
      if (c8 > existingRow.c8) {
        existingRow.c8 = c8;
      }
      if (a9 > existingRow.a9) {
        existingRow.a9 = a9;
      }
      if (b9 > existingRow.b9) {
        existingRow.b9 = b9;
      }
      if (c9 > existingRow.c9) {
        existingRow.c9 = c9;
      }
      if (a10 > existingRow.a10) {
        existingRow.a10 = a10;
      }
      if (b10 > existingRow.b10) {
        existingRow.b10 = b10;
      }
      if (c10 > existingRow.c10) {
        existingRow.c10 = c10;
      }
    } else {
      rollNoMap.set(rollNo, {
        a1,
        b1,
        c1,
        a2,
        b2,
        c2,
        a3,
        b3,
        c3,
        a4,
        b4,
        c4,
        a5,
        b5,
        c5,
        a6,
        b6,
        c6,
        a7,
        b7,
        c7,
        a8,
        b8,
        c8,
        a9,
        b9,
        c9,
        a10,
        b10,
        c10,
      });
    }
  }

  //console.log(rollNoMap);

  rollNoMap.forEach(
    (
      {
        a1,
        b1,
        c1,
        a2,
        b2,
        c2,
        a3,
        b3,
        c3,
        a4,
        b4,
        c4,
        a5,
        b5,
        c5,
        a6,
        b6,
        c6,
        a7,
        b7,
        c7,
        a8,
        b8,
        c8,
        a9,
        b9,
        c9,
        a10,
        b10,
        c10,
      },
      key
    ) => {
      let u1q1 = a1 + b1 + c1;
      let u1q2 = a2 + b2 + c2;
      let u2q1 = a3 + b3 + c3;
      let u2q2 = a4 + b4 + c4;
      let u3q1 = a5 + b5 + c5;
      let u3q2 = a6 + b6 + c6;
      let u4q1 = a7 + b7 + c7;
      let u4q2 = a8 + b8 + c8;
      let u5q1 = a9 + b9 + c9;
      let u5q2 = a10 + b10 + c10;

      let u1, u2, u3, u4, u5;

      u1 = Math.max(u1q1, u1q2);
      u2 = Math.max(u2q1, u2q2);
      u3 = Math.max(u3q1, u3q2);
      u4 = Math.max(u4q1, u4q2);
      u5 = Math.max(u5q1, u5q2);

      const unit = [u1, u2, u3, u4, u5];
      marks.push(unit);
    }
  );
 // console.log(marks);
  return marks;
};

export default calculateUnitScores;
