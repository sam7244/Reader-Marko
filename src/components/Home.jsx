import React from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
import UserProfile from "./UserProfile";

import { useState } from "react";
import NavBar from "./NavBar";

//  <button className=" border-y-2 border-gray-700" onClick={handleClick}>
//    sign OUt
//  </button>;

const Home = ({ adminId, id, threshold, setThreshold, userData }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen   mx-auto">
      <div className="p-4">
        <NavBar
          adminId={adminId}
          setThreshold={setThreshold}
          threshold={threshold}
        />
      </div>
      <div className="flex max-w-8xl items-center h-20 justify-center gap-5">
        <DemoExcelExport />
        <DemoExcelExport />
      </div>
      <div>
        <FileUpload />
      </div>
    </div>
  );
};

export default Home;
