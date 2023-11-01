let marks = [["u1", "u2", "u3", "u4", "u5"]];

const calculateUnitScores = (rows) => {
  console.log("ROWS", rows);

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

    let unit1 = Math.max(
      parseFloat(a1) + parseFloat(b1) + parseFloat(c1),
      parseFloat(a2) + parseFloat(b2) + parseFloat(c2)
    );
    let unit2 = Math.max(
      parseFloat(a3) + parseFloat(b3) + parseFloat(c3),
      parseFloat(a4) + parseFloat(b4) + parseFloat(c4)
    );
    let unit3 = Math.max(
      parseFloat(a5) + parseFloat(b5) + parseFloat(c5),
      parseFloat(a6) + parseFloat(b6) + parseFloat(c6)
    );
    let unit4 = Math.max(
      parseFloat(a7) + parseFloat(b7) + parseFloat(c7),
      parseFloat(a8) + parseFloat(b8) + parseFloat(c8)
    );
    let unit5 = Math.max(
      parseFloat(a9) + parseFloat(b9) + parseFloat(c9),
      parseFloat(a10) + parseFloat(b10) + parseFloat(c10)
    );

    if (rollNoMap.has(rollNo)) {
      const existingRow = rollNoMap.get(rollNo);

      if (unit1 > existingRow.unit1) {
        existingRow.unit1 = unit1;
      }
      if (unit2 > existingRow.unit2) {
        existingRow.unti2 = unit2;
      }
      if (unit3 > existingRow.unit3) {
        existingRow.unit3 = unit3;
      }
      if (unit4 > existingRow.unit4) {
        existingRow.unit4 = unit4;
      }
      if (unit5 > existingRow.unit5) {
        existingRow.unit5 = unit5;
      }
    } else {
      rollNoMap.set(rollNo, {
        unit1,
        unit2,
        unit3,
        unit4,
        unit5,
      });
    }
  }

  //console.log(rollNoMap);

  rollNoMap.forEach(({ unit1, unit2, unit3, unit4, unit5 }, key) => {
    const unit = [unit1, unit2, unit3, unit4, unit5];
    marks.push(unit);
  });
  //console.log("the final marks of the SIE this is not the final one", marks);
  return marks;
};

export default calculateUnitScores;
