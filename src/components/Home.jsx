import React, { useEffect } from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
import { FileStateContext } from "../../utils/Context";
import { parse } from "papaparse";

import { useState } from "react";
import NavBar from "./NavBar";
import DemoCIEExport from "./DemoCIEExport";

const Home = ({
  adminId,
  id,
  threshold,
  setThreshold,
  userData,
  userCourses,
}) => {
  //console.log("dat from the god", userCourses);
  const [open, setOpen] = useState(false);
  const { setCoMapping, coMapping } = FileStateContext();
  //console.log(userCourses);

  useEffect(() => {
    // Assuming you have included the PapaParse library in your project
    if (!userCourses[0]?.mapData) return;

    fetch(userCourses[0]?.mapData)
      .then((response) => response.text())
      .then((csvContent) => {
        console.log(csvContent)
        const { data, errors, meta } = parse(csvContent, { header: true });
        //console.log("this is nothing");
        // Access the parsed CSV data
        
        // console.log("this is the data", data);
         
        const arrayOfArrays = data.map((obj) => Object.values(obj));
        // console.log(arrayOfArrays)
        setCoMapping(arrayOfArrays);
        // Access parsing errors and metadata

        // Perform operations on the CSV data
        // ...
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV file:", error);
      });
  }, [userCourses[0]?.mapData]);
 
  return (
    <div className="min-h-scree w-full overflow-hidden bg-black  mx-auto">
      <div className="p-4">
        <NavBar
          userCourses={userCourses}
          adminId={adminId}
          setThreshold={setThreshold}
          threshold={threshold}
        />
      </div>
      <div className="flex max-w-8xl  items-center h-20 justify-center gap-5">
        <DemoExcelExport />
        <DemoCIEExport />
      </div>
      <div>
        <FileUpload />
      </div>
    </div>
  );
};

export default Home;
