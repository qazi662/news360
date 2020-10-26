// Import Libraries
import React from "react";

// Import Screens
import Providers from "./src/navigation/Providers";

// Loading
import { AppLoading } from "expo";

// Fonts
import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_400Regular,
  Cairo_700Bold,
} from "@expo-google-fonts/cairo";

function App() {
  // Loading Fonts
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_400Regular,
    Cairo_700Bold,
  });

  // Check to see if fonts loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Providers />;
}

export default App;
