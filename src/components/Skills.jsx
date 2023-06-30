import React from "react";

import { motion } from "framer-motion";
import pdf from "../assets/pdf.png";

const Skills = ({ userArchives }) => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Archive List
          </p>
          <h2 className="py-4">Recent Docs</h2>
        </motion.div>
        {userArchives?.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <a href={`${item?.docUrl}?dl=`}>
                    {Date(item?._updatedAt).slice(0, 16)}
                  </a>
                </div>
                <div className="m-auto">
                  <img className="" src={pdf} width="35" height="35" alt="/" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
