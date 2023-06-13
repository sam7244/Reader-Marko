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
const OutputTable = ({ rows }) => {
  return (
    <div className="max-h-[450px] max-w-2xl overflow-y-scroll">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            {rows[0].map((item, idx) => (
              <TableHead key={item} className="font-bold  text-lg w-[100px]">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.slice(1).map((items, idx) => (
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

export default OutputTable;
