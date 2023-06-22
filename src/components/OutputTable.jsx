import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
const OutputTable = ({ rows, handleChange, setIsUploaded, isUploaded }) => {
  return (
    <div className="max-h-[450px] w-full border-2 border-white overflow-y-scroll ">
      <div className="flex justify-between items-center">
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
      </div>

      <Table>
        <TableCaption className="font-bold text-lg underline">
          {isUploaded ? "Your Excel Data" : "Updated Excel Data"}
        </TableCaption>

        <TableHeader>
          <TableRow>
            {rows[0]?.map((item, idx) => (
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
          {rows?.slice(1).map((items, idx) => (
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

export default OutputTable;
