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
        <button className="px-3 py-2  text-xl  bg-white text-black font-semibold  rounded-xl ">
          DownLoad SIE Format
        </button>
      }
    >
      <Workbook.Sheet data={data1} name="Sheet A">
        <Workbook.Column label="Candidate Barcode" value="Candidate Barcode" />
        <Workbook.Column label="Round" value="Round" />
        <Workbook.Column label="1a" value="1a" />
        <Workbook.Column label="1b" value="1b" />
        <Workbook.Column label="1c" value="1c" />
        <Workbook.Column label="2a" value="2a" />
        <Workbook.Column label="2b" value="2b" />
        <Workbook.Column label="2c" value="2c" />
        <Workbook.Column label="3a" value="3a" />
        <Workbook.Column label="3b" value="3b" />
        <Workbook.Column label="3c" value="3c" />
        <Workbook.Column label="4a" value="4a" />
        <Workbook.Column label="4b" value="4b" />
        <Workbook.Column label="4c" value="4c" />
        <Workbook.Column label="5a" value="5a" />
        <Workbook.Column label="5b" value="5b" />
        <Workbook.Column label="5c" value="5c" />
        <Workbook.Column label="6a" value="6a" />
        <Workbook.Column label="6b" value="6b" />
        <Workbook.Column label="6c" value="6c" />
        <Workbook.Column label="7a" value="7a" />
        <Workbook.Column label="7b" value="7b" />
        <Workbook.Column label="7c" value="7c" />
        <Workbook.Column label="8a" value="8a" />
        <Workbook.Column label="8b" value="8b" />
        <Workbook.Column label="8c" value="8c" />
        <Workbook.Column label="9a" value="9a" />
        <Workbook.Column label="9b" value="9b" />
        <Workbook.Column label="9c" value="9c" />
        <Workbook.Column label="10a" value="10a" />
        <Workbook.Column label="10b" value="10b" />
        <Workbook.Column label="10c" value="10c" />
      </Workbook.Sheet>
    </Workbook>
  </div>
);

export default DemoExcelExport;
