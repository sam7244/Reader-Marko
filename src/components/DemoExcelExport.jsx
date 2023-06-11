import Workbook from "react-excel-workbook";

const data1 = [
  {
    RollNo: "",
    U1: "",
    U2: "",
  },
];

const DemoExcelExport = () => (
  <div className="">
    <Workbook
      filename="example.xlsx"
      element={
        <button className="px-4 py-2 rounded-lg bg-gray-300 mt-10">
          DownLoad Example
        </button>
      }
    >
      <Workbook.Sheet data={data1} name="Sheet A">
        <Workbook.Column label="RollNo" value="RollNo" />
        <Workbook.Column label="U1" value="U1" />
        <Workbook.Column label="U2" value="U2" />
      </Workbook.Sheet>
    </Workbook>
  </div>
);

export default DemoExcelExport;
