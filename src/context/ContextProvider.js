// Import Libraries
import React, { createContext } from "react";

// Create Context
const Context = createContext();

export const ContextProvider = ({ children }) => {
  //State Values
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  //Function To Toggle Dark Theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Context.Provider value={{ toggleTheme, isDarkTheme }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
