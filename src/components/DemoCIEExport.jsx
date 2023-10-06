import Workbook from "react-excel-workbook";

const data1 = [
  {
    RollNo: "",
    U1: "",
    U2: "",
  },
];

const DemoCIEExport = () => (
  <div className="p-4 h-full flex items-center">
    <Workbook
      filename="example.xlsx"
      element={
        <button className="px-3 py-2  text-xl  bg-white text-black font-semibold  rounded-xl ">
          DownLoad CIE Format
        </button>
      }
    >
      <Workbook.Sheet data={data1} name="Sheet A">
        <Workbook.Column label="mse1" value="mse1" />
        <Workbook.Column label="mse2" value="mse2" />
        <Workbook.Column label="m1" value="m1" />
        <Workbook.Column label="m2" value="m2" />
        <Workbook.Column label="m3" value="m3" />
        <Workbook.Column label="m4" value="m4" />
        <Workbook.Column label="t" value="t" />
        <Workbook.Column label="t1" value="t1" />
        <Workbook.Column label="t2" value="t2" />
      </Workbook.Sheet>
    </Workbook>
  </div>
);

export default DemoCIEExport;
