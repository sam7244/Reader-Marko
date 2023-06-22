import React from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
import UserProfile from "./UserProfile";

import { useState } from "react";
import NavBar from "./NavBar";
import Home2 from "../../container/Home";

const Home = ({
  adminId,
  id,
  threshold,
  setThreshold,
  userData,
  userCourses,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white w-full overflow-hidden  mx-auto">
      <div className="p-4">
        <NavBar
          userCourses={userCourses}
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
      {/* <Home2 /> */}
    </div>
  );
};

export default Home;
