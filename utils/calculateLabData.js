const data = [
  ["unit", "mse1", "t1", "t2", "t3"],
  [49, 20, 8, 10, 10],
  [22, 10, 5, 8, 5],
  [20, 20, 5, 6, 6],
  [47, 15, 6, 8, 8],
  [47, 10, 5, 8, 6],
  [35, 11, 5, 8, 6],
  [47, 20, 7, 10, 10],
  [45, 20, 7, 10, 10],
  [42, 10, 5, 10, 6],
  [45, 20, 7, 10, 10],
  [39, 13, 7, 10, 6],
  [36, 11, 5, 8, 6],
  [36, 12, 7, 8, 6],
  [39, 13, 7, 6, 10],
  [46, 13, 5, 8, 10],
];

let marks = [["u1", "u2", "m1", "m2"]];

const calculateLabData = () => {
  marks = [["u1", "u2", "m1", "m2"]];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const [unit, mse1, t1, t2, t3] = row;

    let fiftyFiveUnit = 0.55 * unit;
    let fourtyFiveUnit = 0.45 * unit;

    let total = mse1 + t1 + t2 + t3;

    let fourtyFiveMse = total * 0.45;
    let fiftyFiveMse = total * 0.55;

    const x = [fiftyFiveUnit, fourtyFiveUnit, fourtyFiveMse, fiftyFiveMse];

    marks.push(x);
  }

  console.log(marks);
  return marks;
};

export default calculateLabData;
