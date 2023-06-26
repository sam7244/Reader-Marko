import React from "react";
import { ExcelRenderer } from "react-excel-renderer";

const FileUploadCIE = () => {
  const [rowsCIE, setRowsCIE] = useState([]);
  const [colsCIE, setColsCIE] = useState([]);
  const [isUploadedCIE, setIsUploadedCIE] = useState(false);

  const readUploadFileCIE = async (e) => {
    let fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
        toast.error("Oops Something Went Wrong!");
      } else {
        const { rows, cols } = resp;
        cols.push({ name: "D", key: 3 });
        setRowsCIE(rows);
        setColsCIE(cols);
        setIsUploadedCIE(true);
      }
    });
  };

  return (
    <div
      style={{ borderRadius: "9px" }}
      className="flex flex-col w-full p-4 gap-2 max-w-4xl mx-auto border-4 border-dashed  items-center justify-center"
    >
      <p className="font-bold text-xl  animate-bounce">Upload File Below</p>

      <input
        className=" py-5 text-md  font-semibold px-4 border-2 bg-gray-200 border-dotted "
        style={{ borderRadius: "10px" }}
        type="file"
        name="upload"
        id="upload"
        placeholder="Choose File"
        onChange={readUploadFile}
      />
    </div>
  );
};

export default FileUploadCIE;
