import React from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
const Home = ({ id }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center">
      <FileUpload id={id} />
      <button className=" border-y-2 border-gray-700" onClick={handleClick}>
        sign OUt
      </button>
      <DemoExcelExport />
    </div>
  );
};

export default Home;
