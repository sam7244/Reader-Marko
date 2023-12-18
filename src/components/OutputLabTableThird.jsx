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

const OutputLabTableThird = ({
  rows,
  handleChange,
  setIsUploaded,
  mappedData,
  isUpdated,
}) => {
  if (!isUpdated) {
    return (
      <div className="flex w-full justify-center items-center">
        <p>please update the excel form</p>
      </div>
    );
  }

  console.log("this is the rows++++++++++++++++++++++++++++++++++++()()()()()()", mappedData);

  return (
    <div className="md:h-[400px] max-h-[450px]  overflow-y-scroll ">
      <div className="flex  justify-center border-b p-2 border-white">
        <p className="font-bold text-white underline ">Mapped Data</p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            {mappedData[0]?.map((item, idx) => (
              <TableHead
                key={idx}
                className="font-bold text-white  text-lg w-[100px]"
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {mappedData?.slice(1).map((items, idx) => (
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

export default OutputLabTableThird;
