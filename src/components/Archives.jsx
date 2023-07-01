import React from "react";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";
const Archives = ({ userArchives }) => {
  const navigate = useNavigate();
  if (userArchives.length == 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-4xl font-bold underline">
            Oops you don&apos; have any previous documents
          </p>
          <div className="w-full flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="py-2 px-8 bg-black rounded-[10px] font-semibold text-white"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black">
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-gray-400 font-semibold text-white m-2 rounded-[8px]"
      >
        Home
      </button>
      <Skills userArchives={userArchives} />
    </div>
  );
};

export default Archives;
