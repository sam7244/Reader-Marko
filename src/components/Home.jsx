import React from "react";
import FileUpload from "./FileUpload";
const Home = ({ id }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div>
      <FileUpload id={id} />
      <button onClick={handleClick}>sign OUt</button>
    </div>
  );
};

export default Home;
