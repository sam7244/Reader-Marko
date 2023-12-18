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

const OutputLabTableSec = ({
  attainment,
  setAttainment,
  isUploaded,
  isUpdated,
  marks,
  threshold,
  setAvgAttainent,
  courseCode,
}) => {
  // console.log("SIE", marks);

  //  console.log("count", marks.length, rowsCIE.length);

  if (!isUpdated) {
    return (
      <div className="flex w-full justify-center items-center">
        <p>please update the excel form</p>
      </div>
    );
  }

  let AttainmentData = [["CO", "CIE", "Level", "SIE", "Level", "Average"]];
  useEffect(() => {
    AttainmentData = [["CO", "CIE", "Level", "SIE", "Level", "AVerage"]];

    const THRESH_HOLD = 60;
    const STUDENT_COUNT = marks.length - 1;

    // console.log("sie count", STUDENT_COUNT, "cie count", STUDENT_CIE_COUNT);

    var u1Sum = 0;
    var u2Sum = 0;
    var u3Sum = 0;
    var u4Sum = 0;

    let thirty_per = parseInt((30 * STUDENT_COUNT) / 100);
    let forty_per = parseInt((40 * STUDENT_COUNT) / 100);
    let fifty_per = parseInt((50 * STUDENT_COUNT) / 100);
    let sixty_per = parseInt((60 * STUDENT_COUNT) / 100);
    let seventy_per = parseInt((70 * STUDENT_COUNT) / 100);

    let u1 = ((THRESH_HOLD * 20) / 100 - 0.1).toFixed(1);
    let u2 = ((THRESH_HOLD * 20) / 100 - 0.1).toFixed(1);
    let u3 = ((THRESH_HOLD * 20) / 100 - 0.1).toFixed(1);
    let u4 = ((THRESH_HOLD * 20) / 100 - 0.1).toFixed(1);

    //console.log(" threshhold", u1);

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
    }

    let U1Level;
    let U2Level;
    let U3Level;
    let U4Level;

    if (u1Sum > thirty_per && u1Sum <= forty_per) {
      U1Level = "L1";
    } else if (u1Sum > forty_per && u1Sum <= fifty_per) {
      U1Level = "L2";
    } else if (u1Sum > fifty_per && u1Sum <= sixty_per) {
      U1Level = "L3";
    } else if (u1Sum > sixty_per && u1Sum <= seventy_per) {
      U1Level = "L4";
    } else if (u1Sum > seventy_per && u1Sum <= STUDENT_COUNT) {
      U1Level = "L5";
    } else {
      U1Level = "Invalid";
    }

    if (u2Sum > thirty_per && u2Sum <= forty_per) {
      U2Level = "L1";
    } else if (u2Sum > forty_per && u2Sum <= fifty_per) {
      U2Level = "L2";
    } else if (u2Sum > fifty_per && u2Sum <= sixty_per) {
      U2Level = "L3";
    } else if (u2Sum > sixty_per && u2Sum <= seventy_per) {
      U2Level = "L4";
    } else if (u2Sum > seventy_per && u2Sum <= STUDENT_COUNT) {
      U2Level = "L5";
    } else {
      U2Level = "Invalid";
    }

    if (u3Sum > thirty_per && u3Sum <= forty_per) {
      U3Level = "L1";
    } else if (u3Sum > forty_per && u3Sum <= fifty_per) {
      U3Level = "L2";
    } else if (u3Sum > fifty_per && u3Sum <= sixty_per) {
      U3Level = "L3";
    } else if (u3Sum > sixty_per && u3Sum <= seventy_per) {
      U2Level = "L4";
    } else if (u3Sum > seventy_per && u3Sum <= STUDENT_COUNT) {
      U3Level = "L5";
    } else {
      U3Level = "Invalid";
    }

    if (u4Sum > thirty_per && u4Sum <= forty_per) {
      U4Level = "L1";
    } else if (u4Sum > forty_per && u4Sum <= fifty_per) {
      U4Level = "L2";
    } else if (u4Sum > fifty_per && u4Sum <= sixty_per) {
      U4Level = "L3";
    } else if (u4Sum > sixty_per && u4Sum <= seventy_per) {
      U4Level = "L4";
    } else if (u4Sum > seventy_per && u4Sum <= STUDENT_COUNT) {
      U4Level = "L5";
    } else {
      U4Level = "Invalid";
    }

    const LevelArrayCIE = [U1Level, U2Level];
    const LevelArraySIE = [U3Level, U4Level];

    //console.log("SIE ss", SumArraySIE);
    const NameArray = [courseCode + ".1", courseCode + ".2"];

    const arrayCIE = [u1Sum, u2Sum];
    const arraySIE = [u3Sum, u4Sum];

    const LevelMap = new Map();

    LevelMap.set("L1", 1);
    LevelMap.set("L2", 2);
    LevelMap.set("L3", 3);
    LevelMap.set("L4", 4);
    LevelMap.set("L5", 5);
    LevelMap.set("Invalid", 0);

    let avgAttain = [];

    for (let i = 0; i < 2; i++) {
      var AvgAttainent = (
        (parseInt(LevelMap.get(LevelArrayCIE[i])) +
          parseInt(LevelMap.get(LevelArraySIE[i]))) /
        2
      ).toFixed(1);

      avgAttain.push(AvgAttainent);

      AttainmentData.push([
        NameArray[i],
        arrayCIE[i],
        parseInt(LevelMap.get(LevelArrayCIE[i])),
        arraySIE[i],
        parseInt(LevelMap.get(LevelArraySIE[i])),
        AvgAttainent,
      ]);
    }

    console.log("ANother*************************************", AttainmentData);
    setAttainment(AttainmentData);

    setAvgAttainent(avgAttain);
    // console.log(avgAttain);
  }, [isUploaded]);

  return (
    <div className=" overflow-y-scroll ">
      <div
        className={`flex p-2 border-b  border-white justify-center font-bold text-white underline`}
      >
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

export default OutputLabTableSec;
