// Import Libraries
import React from "react";

//Import Context Provider
import { ContextProvider } from "../context/ContextProvider";

// Import Screens
import MainNavigation from "./MainNavigation";

const Providers = () => {
  return (
    <ContextProvider>
      <MainNavigation />
    </ContextProvider>
  );
};

export default Providers;
