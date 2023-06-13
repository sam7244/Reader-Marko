import Workbook from "react-excel-workbook";

const data1 = [
  {
    RollNo: "",
    U1: "",
    U2: "",
  },
];

const DemoExcelExport = () => (
  <div className="p-4 h-full flex items-center">
    <Workbook
      filename="example.xlsx"
      element={
        <button className="px-3 py-2 rounded-lg  bg-black font-semibold text-white ">
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
