import Workbook from "react-excel-workbook";

const data1 = [
  {
    RollNo: "",
    U1: "",
    U2: "",
  },
];

const POCODemo = () => (
  <div className="p-4 h-full flex items-center">
    <Workbook
      filename="example.xlsx"
      element={
        <button
          style={{ borderRadius: "14px" }}
          className="px-8 py-2   transition duration-150  ease-in-out hover:scale-110 bg-black font-semibold text-white "
        >
          Sample POCO
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

export default POCODemo;
