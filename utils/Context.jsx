import React, { useContext, useState } from "react";

const FileContext = React.createContext();

export const StateContextProvider = ({ children }) => {
  //const [AvgAttainent, setAvgAttainent] = useState([]);
  const [mappedData, setmappedData] = useState([{}]);

  return (
    <FileContext.Provider
      value={{
        mappedData,
        setmappedData,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
// See Crowdfunding project for more information
export const FileStateContext = () => useContext(FileContext);
