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

const OutputTableThird = ({
  rows,
  handleChange,
  setIsUploaded,
  mappedData,
}) => {
  return (
    <div className="max-h-[200px] max-w-2xl overflow-y-scroll ">
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
        <p className="">Mapped Data</p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            {mappedData[0]?.map((item, idx) => (
              <TableHead key={idx} className="font-bold  text-lg w-[100px]">
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
                  className="font-medium"
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

export default OutputTableThird;
