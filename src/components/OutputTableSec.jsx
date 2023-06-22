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
    console.log(threshold);
    const THRESH_HOLD = parseInt(threshold);
    const STUDENT_COUNT = marks.length;

    var u1Sum = 0;
    var u2Sum = 0;
    var u3Sum = 0;
    var u4Sum = 0;
    var u5Sum = 0;

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

    var u1Sum = 0;

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

    let U1Level;
    let U2Level;
    let U3Level;
    let U4Level;
    let U5Level;

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

    const LevelArrayCIE = [U1Level, U2Level, U3Level, U4Level, U5Level];
    const LevelArraySIE = [U1Level, U2Level, U3Level, U4Level, U5Level];
    const SumArrayCIE = [u1Sum, u2Sum, u3Sum, u4Sum, u5Sum];
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
    <div className="max-h-[450px]  w-full overflow-y-scroll ">
      {/* <div className="flex justify-between items-center">
        <div
          style={{ borderRadius: "8px" }}
          className="h-15 m-2 bg-blue-400 rounded-lg w-20 px-4 py-2"
        >
          <button className="" onClick={handleChange}>
            Update
          </button>
        </div>
        <div
          style={{ borderRadius: "8px" }}
          className="h-15 m-2 bg-red-400 rounded-lg w-25 px-4 py-2 "
        >
          <button onClick={() => setIsUploaded(false)}>Re-Upload</button>
        </div>
      </div> */}
      <div className="flex justify-center">
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
