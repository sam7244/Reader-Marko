const threshhold = () => {
  const THRESH_HOLD = 60;
  const STUDENT_COUNT = data.length;

  var u1Sum = 0;
  var u2Sum = 0;
  var u3Sum = 0;
  var u4Sum = 0;

  let thirty_per = parseInt((30 * STUDENT_COUNT) / 100);
  let forty_per = parseInt((40 * STUDENT_COUNT) / 100);
  let fifty_per = parseInt((50 * STUDENT_COUNT) / 100);
  let sixty_per = parseInt((60 * STUDENT_COUNT) / 100);
  let seventy_per = parseInt((70 * STUDENT_COUNT) / 100);

  let u1 = ((THRESH_HOLD * 8) / 100 - 0.1).toFixed(1);
  let u2 = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);
  let u3 = ((THRESH_HOLD * 8) / 100 - 0.1).toFixed(1);
  let u4 = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);

  var u1Sum = 0;

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] > u1) {
      u1Sum++;
    }
    if (data[i][1] > u2) {
      u2Sum++;
    }
    if (data[i][2] > u3) {
      u3Sum++;
    }
    if (data[i][3] > u3) {
      u4Sum++;
    }
  }

  let U1Level;
  let U2Level;
  let U3Level;
  let U4Level;

  if (u1Sum > thirty_per && u1Sum < forty_per) {
    U1Level = "L1";
  } else if (u1Sum > forty_per && u1Sum < fifty_per) {
    U1Level = "L2";
  } else if (u1Sum > fifty_per && u1Sum < sixty_per) {
    U1Level = "L3";
  } else if (u1Sum > sixty_per && u1Sum < seventy_per) {
    U1Level = "L4";
  } else if (u1Sum > seventy_per && u1Sum < STUDENT_COUNT) {
    U1Level = "L5";
  } else {
    U1Level = "Invalid";
  }

  if (u2Sum > thirty_per && u2Sum < forty_per) {
    U2Level = "L1";
  } else if (u2Sum > forty_per && u2Sum < fifty_per) {
    U2Level = "L2";
  } else if (u2Sum > fifty_per && u2Sum < sixty_per) {
    U2Level = "L3";
  } else if (u2Sum > sixty_per && u2Sum < seventy_per) {
    U2Level = "L4";
  } else if (u2Sum > seventy_per && u2Sum < STUDENT_COUNT) {
    U2Level = "L5";
  } else {
    U2Level = "Invalid";
  }

  if (u3Sum > thirty_per && u3Sum < forty_per) {
    U3Level = "L1";
  } else if (u3Sum > forty_per && u3Sum < fifty_per) {
    U3Level = "L2";
  } else if (u1Sum > fifty_per && u1Sum < sixty_per) {
    U1Level = "L3";
  } else if (u3Sum > sixty_per && u3Sum < seventy_per) {
    U3Level = "L4";
  } else if (u3Sum > seventy_per && u3Sum < STUDENT_COUNT) {
    U3Level = "L5";
  } else {
    U3Level = "Invalid";
  }

  if (u4Sum > thirty_per && u4Sum < forty_per) {
    U4Level = "L1";
  } else if (u4Sum > forty_per && u4Sum < fifty_per) {
    U4Level = "L2";
  } else if (u1Sum > fifty_per && u1Sum < sixty_per) {
    U1Level = "L3";
  } else if (u4Sum > sixty_per && u4Sum < seventy_per) {
    U4Level = "L4";
  } else if (u4Sum > seventy_per && u4Sum < STUDENT_COUNT) {
    U4Level = "L5";
  } else {
    U4Level = "Invalid";
  }

  const LevelArrayCIE = [U1Level, U2Level, U3Level, U4Level, "L5"];
  const LevelArraySIE = [U1Level, U2Level, U3Level, U4Level, "L5"];
  const SumArrayCIE = [u1Sum, u2Sum, u3Sum, u4Sum, 60];
  const SumArraySIE = [u1Sum, u2Sum, u3Sum, u4Sum, 60];
  const NameArray = ["C502.1", "C502.2", "C502.3", "C502.4", "C502.5"];

  const LevelMap = new Map();

  LevelMap.set("L1", 1);
  LevelMap.set("L2", 2);
  LevelMap.set("L3", 3);
  LevelMap.set("L4", 4);
  LevelMap.set("L5", 5);

  let AttainmentData = [];

  for (let i = 0; i < 5; i++) {
    var AvgAttainent = (
      (parseInt(LevelMap.get(LevelArrayCIE[i])) +
        parseInt(LevelMap.get(LevelArraySIE[i]))) /
      2
    ).toFixed(1);

    var PercetAttainment = (100 * AvgAttainent) / 5;

    AttainmentData.push([
      NameArray[i],
      SumArrayCIE[i],
      parseInt(LevelMap.get(LevelArrayCIE[i])),
      SumArraySIE[i],
      parseInt(LevelMap.get(LevelArraySIE[i])),
      AvgAttainent,
      PercetAttainment,
    ]);
  }
};

export default threshhold;
