import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import data from "../../utils/getData";

const OutputTableSec = ({
  attainment,
  setAttainment,
  isUploaded,
  isUpdated,
  marks,
  threshold,
  rowsCIE,
}) => {
  if (!isUpdated) {
    return (
      <div className="flex w-full justify-center items-center">
        <p>please update the excel form</p>
      </div>
    );
  }

  let AttainmentData = [["CO", "CIE", "Level", "SIE", "level", "Avg", "Total"]];
  useEffect(() => {
    AttainmentData = [["CO", "CIE", "Level", "SIE", "level", "Avg", "Total"]];

    const THRESH_HOLD = 60;
    const STUDENT_COUNT = marks.length;
    const STUDENT_CIE_COUNT = rowsCIE.length;

    var u1Sum = 0;
    var u2Sum = 0;
    var u3Sum = 0;
    var u4Sum = 0;
    var u5Sum = 0;

    var u1SumCIE = 0;
    var u2SumCIE = 0;
    var u3SumCIE = 0;
    var u4SumCIE = 0;
    var u5SumCIE = 0;

    let thirty_per = parseInt((30 * STUDENT_COUNT) / 100);
    let forty_per = parseInt((40 * STUDENT_COUNT) / 100);
    let fifty_per = parseInt((50 * STUDENT_COUNT) / 100);
    let sixty_per = parseInt((60 * STUDENT_COUNT) / 100);
    let seventy_per = parseInt((70 * STUDENT_COUNT) / 100);

    let u1 = ((THRESH_HOLD * 8) / 100 - 0.1).toFixed(1);
    let u2 = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);
    let u3 = ((THRESH_HOLD * 8) / 100 - 0.1).toFixed(1);
    let u4 = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);
    let u5 = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);

    let u1CIE = ((THRESH_HOLD * 8) / 100 - 0.1).toFixed(1);
    let u2CIE = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);
    let u3CIE = ((THRESH_HOLD * 8) / 100 - 0.1).toFixed(1);
    let u4CIE = ((THRESH_HOLD * 7) / 100 - 0.1).toFixed(1);
    let u5CIE = ((THRESH_HOLD * 20) / 100 - 0.1).toFixed(1);

    for (var i = 1; i < marks.length; i++) {
      if (marks[i][0] > u1) {
        u1Sum++;
      }
      if (marks[i][1] > u2) {
        u2Sum++;
      }
      if (marks[i][2] > u3) {
        u3Sum++;
      }
      if (marks[i][3] > u4) {
        u4Sum++;
      }
      if (marks[i][4] > u5) {
        u5Sum++;
      }
    }

    for (var i = 1; i < rowsCIE.length; i++) {
      if (rowsCIE[i][2] > u1CIE) {
        u1SumCIE++;
      }
      if (rowsCIE[i][3] > u2CIE) {
        u2SumCIE++;
      }
      if (rowsCIE[i][4] > u3CIE) {
        u3SumCIE++;
      }
      if (rowsCIE[i][5] > u4CIE) {
        u4SumCIE++;
      }
      if (rowsCIE[i][6] > u5CIE) {
        u5SumCIE++;
      }
    }

    console.log("SIE", [u1Sum, u2Sum, u3Sum, u4Sum, u5Sum]);
    console.log("CIE", [u1SumCIE, u2SumCIE, u3SumCIE, u4SumCIE, u5SumCIE]);

    let U1Level;
    let U2Level;
    let U3Level;
    let U4Level;
    let U5Level;

    let U1LevelCIE;
    let U2LevelCIE;
    let U3LevelCIE;
    let U4LevelCIE;
    let U5LevelCIE;

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
      U3Level = "L3";
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
      U4Level = "L3";
    } else if (u4Sum > sixty_per && u4Sum < seventy_per) {
      U4Level = "L4";
    } else if (u4Sum > seventy_per && u4Sum < STUDENT_COUNT) {
      U4Level = "L5";
    } else {
      U4Level = "Invalid";
    }

    if (u5Sum > thirty_per && u5Sum < forty_per) {
      U5Level = "L1";
    } else if (u5Sum > forty_per && u5Sum < fifty_per) {
      U5Level = "L2";
    } else if (u1Sum > fifty_per && u1Sum < sixty_per) {
      U5Level = "L3";
    } else if (u5Sum > sixty_per && u5Sum < seventy_per) {
      U5Level = "L4";
    } else if (u5Sum > seventy_per && u5Sum < STUDENT_COUNT) {
      U5Level = "L5";
    } else {
      U5Level = "Invalid";
    }

    if (u1SumCIE > thirty_per && u1SumCIE < forty_per) {
      U1LevelCIE = "L1";
    } else if (u1SumCIE > forty_per && u1SumCIE < fifty_per) {
      U1LevelCIE = "L2";
    } else if (u1SumCIE > fifty_per && u1SumCIE < sixty_per) {
      U1LevelCIE = "L3";
    } else if (u1SumCIE > sixty_per && u1SumCIE < seventy_per) {
      U1LevelCIE = "L4";
    } else if (u1SumCIE > seventy_per && u1SumCIE < STUDENT_CIE_COUNT) {
      U1LevelCIE = "L5";
    } else {
      U1LevelCIE = "Invalid";
    }

    if (u2SumCIE > thirty_per && u2SumCIE < forty_per) {
      U2LevelCIE = "L1";
    } else if (u2SumCIE > forty_per && u2SumCIE < fifty_per) {
      U2LevelCIE = "L2";
    } else if (u2SumCIE > fifty_per && u2SumCIE < sixty_per) {
      U2LevelCIE = "L3";
    } else if (u2SumCIE > sixty_per && u2SumCIE < seventy_per) {
      U2LevelCIE = "L4";
    } else if (u2SumCIE > seventy_per && u2SumCIE < STUDENT_CIE_COUNT) {
      U2LevelCIE = "L5";
    } else {
      U2LevelCIE = "Invalid";
    }

    if (u3SumCIE > thirty_per && u3SumCIE < forty_per) {
      U3LevelCIE = "L1";
    } else if (u3SumCIE > forty_per && u3SumCIE < fifty_per) {
      U3LevelCIE = "L2";
    } else if (u3SumCIE > fifty_per && u3SumCIE < sixty_per) {
      U3LevelCIE = "L3";
    } else if (u3SumCIE > sixty_per && u3SumCIE < seventy_per) {
      U3LevelCIE = "L4";
    } else if (u3SumCIE > seventy_per && u3SumCIE < STUDENT_CIE_COUNT) {
      U3LevelCIE = "L5";
    } else {
      U3LevelCIE = "Invalid";
    }

    if (u4SumCIE > thirty_per && u4SumCIE < forty_per) {
      U4LevelCIE = "L1";
    } else if (u4SumCIE > forty_per && u4SumCIE < fifty_per) {
      U4LevelCIE = "L2";
    } else if (u4SumCIE > fifty_per && u4SumCIE < sixty_per) {
      U4LevelCIE = "L3";
    } else if (u4SumCIE > sixty_per && u4SumCIE < seventy_per) {
      U4LevelCIE = "L4";
    } else if (u4SumCIE > seventy_per && u4SumCIE < STUDENT_CIE_COUNT) {
      U4LevelCIE = "L5";
    } else {
      U4LevelCIE = "Invalid";
    }

    if (u5SumCIE > thirty_per && u5SumCIE < forty_per) {
      U5LevelCIE = "L1";
    } else if (u5Sum > forty_per && u5SumCIE < fifty_per) {
      U5LevelCIE = "L2";
    } else if (u5SumCIE > fifty_per && u5SumCIE < sixty_per) {
      U5LevelCIE = "L3";
    } else if (u5SumCIE > sixty_per && u5SumCIE < seventy_per) {
      U5LevelCIE = "L4";
    } else if (u5SumCIE > seventy_per && u5SumCIE < STUDENT_CIE_COUNT) {
      U5LevelCIE = "L5";
    } else {
      U5LevelCIE = "Invalid";
    }

    const LevelArrayCIE = [U1LevelCIE, U2Level, U3Level, U4Level, U5Level];

    const LevelArraySIE = [U1Level, U2Level, U3Level, U4Level, U5Level];
    console.log(LevelArraySIE);
    console.log(LevelArrayCIE);
    const SumArrayCIE = [u1SumCIE, u2SumCIE, u3SumCIE, u4SumCIE, u5SumCIE];
    //console.log(SumArrayCIE);
    const SumArraySIE = [u1Sum, u2Sum, u3Sum, u4Sum, u5Sum];
    const NameArray = ["C502.1", "C502.2", "C502.3", "C502.4", "C502.5"];

    const LevelMap = new Map();

    LevelMap.set("L1", 1);
    LevelMap.set("L2", 2);
    LevelMap.set("L3", 3);
    LevelMap.set("L4", 4);
    LevelMap.set("L5", 5);

    for (let i = 0; i < 5; i++) {
      var AvgAttainent = (
        (parseInt(LevelMap.get(LevelArrayCIE[i])) +
          parseInt(LevelMap.get(LevelArraySIE[i]))) /
        2
      ).toFixed(1);

      var PercetAttainment = (100 * AvgAttainent) / 5;
      // console.log("this is CIE", SumArrayCIE);
      // console.log("this is SIE", SumArraySIE);

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

    //console.log(AttainmentData);
    setAttainment(AttainmentData);
  }, [isUploaded]);

  return (
    <div className=" overflow-y-scroll ">
      <div className="flex p-2 border-b border-white justify-center font-bold text-white underline">
        <p className="">Attainment Data</p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            {AttainmentData[0].map((item, idx) => (
              <TableHead
                key={item}
                className="font-bold text-white text-lg w-[100px]"
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {attainment.slice(1).map((items, idx) => (
            <TableRow key={`${items}----${idx + Math.random()}`}>
              {items.map((val) => (
                <TableCell
                  key={`${items}--${val + Math.random()}--${idx}`}
                  className="font-medium text-white"
                >
                  {val}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OutputTableSec;
