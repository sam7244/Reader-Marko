import React, { useEffect } from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
import { parse } from "papaparse";

import { useState } from "react";
import NavBar from "./NavBar";

const Home = ({
  adminId,
  id,
  threshold,
  setThreshold,
  userData,
  userCourses,
}) => {
  const [open, setOpen] = useState(false);
  const [mappedData, setmappedData] = useState([]);
  useEffect(() => {
    // Assuming you have included the PapaParse library in your project
    if (!userCourses[0]?.mapData) return;

    fetch(userCourses[0]?.mapData)
      .then((response) => response.text())
      .then((csvContent) => {
        const { data, errors, meta } = parse(csvContent, { header: true });

        // Access the parsed CSV data

        setmappedData(data);
        // Access parsing errors and metadata

        // Perform operations on the CSV data
        // ...
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV file:", error);
      });
  }, [userCourses[0]?.mapData]);

  console.log(mappedData);
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
        <DemoExcelExport />
      </div>
      <div>
        <FileUpload />
      </div>
    </div>
  );
};

export default Home;
