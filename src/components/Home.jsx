import React from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
const Home = ({ id }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const worksheets = [
    {
      name: "Requests",
      columns: [
        { label: "Full Name", value: "name" },
        { label: "Email", value: "email" },
        { label: "Template", value: "template" },
      ],
      data: [
        {
          name: "Bob Ross",
          email: "boss_ross@gmail.com",
          template: "Accounts Receivables",
        },
      ],
    },
  ];

  return (
    <div>
      <FileUpload id={id} />
      <button onClick={handleClick}>sign OUt</button>
      <DemoExcelExport filename="requests.xlsx" worksheets={worksheets} />
    </div>
  );
};

export default Home;
