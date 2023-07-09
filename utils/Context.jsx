import React, { useContext } from "react";

const FileContext = React.createContext();

export const StateContextProvider = ({ children }) => {
  // states and all the functionality done here
  // all the states and function goes here
  return (
    <FileContext.Provider
      value={
        "//here the states and function as props that goes around all the components"
      }
    >
      {children}
    </FileContext.Provider>
  );
};

// See Crowdfunding project for more information
export const FileStateContext = () => useContext(FileContext);
