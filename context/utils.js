// Import Libraries
import React, { createContext } from "react";

// Create Context
const UtilsContext = createContext();

export const Utils = ({ children }) => {
  return (
    <UtilsContext.Provider value="hello">{children}</UtilsContext.Provider>
  );
};

export default UtilsContext;
