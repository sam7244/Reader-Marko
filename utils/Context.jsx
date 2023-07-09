import React, { useContext, useState } from "react";

const FileContext = React.createContext();

export const StateContextProvider = ({ children }) => {
  // states and all the functionality done here
  // all the states and function goes here
  const [mappedData, setmappedData] = useState([]);
  return (
    <FileContext.Provider
      value={{
        setmappedData,
        mappedData,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

// See Crowdfunding project for more information
export const FileStateContext = () => useContext(FileContext);
