import React from "react";
import Skills from "./Skills";
const Archives = ({ userArchives }) => {
  console.log(userArchives);
  return (
    <div>
      <Skills userArchives={userArchives} />
    </div>
  );
};

export default Archives;
