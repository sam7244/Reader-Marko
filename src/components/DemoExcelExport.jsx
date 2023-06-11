import React from "react";
import Workbook from "react-excel-workbook";

const data1 = [
  {
    foo: "123",
    bar: "456",
    baz: "789",
  },
  {
    foo: "abc",
    bar: "dfg",
    baz: "hij",
  },
  {
    foo: "aaa",
    bar: "bbb",
    baz: "ccc",
  },
];

const data2 = [
  {
    aaa: 1,
    bbb: 2,
    ccc: 3,
  },
  {
    aaa: 4,
    bbb: 5,
    ccc: 6,
  },
];

const DemoExcelExport = ({ filename, worksheets }) => (
  <Workbook
    filename={filename ? filename : ""}
    element={
      <button className="download-excel-button">
        <span>Download</span>
        <img
          src={
            "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_excel-512.png"
          }
          alt=""
        />
      </button>
    }
  >
    {worksheets.map(({ name, columns, data }) => {
      return (
        <Workbook.Sheet name={name} data={data}>
          {columns.map(({ label, value }) => {
            return <Workbook.Column label={label} value={value} />;
          })}
        </Workbook.Sheet>
      );
    })}
  </Workbook>
);
export default DemoExcelExport;
