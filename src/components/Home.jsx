import React from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
import UserProfile from "./UserProfile";

import { useState } from "react";

const Home = ({ id }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full p-4">
      <UserProfile open={open} setOpen={setOpen} />

      <div className="flex justify-between mt-10 w-full items-center">
        <FileUpload id={id} />
        <button className=" border-y-2 border-gray-700" onClick={handleClick}>
          sign OUt
        </button>
        <DemoExcelExport />
      </div>
    </div>
  );
};

export default Home;
