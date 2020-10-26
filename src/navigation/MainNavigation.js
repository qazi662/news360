// Import Libraries
import React, { useContext } from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Stacks
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";
import AuthStack from "./AuthStack";
import BookmarksStack from "./BookmarksStack";
import AboutStack from "./AboutStack";

// Import Components
import DrawerContent from "../components/DrawerContent";

//Import Context Provider
import Context from "../context/ContextProvider";

//Create Drawer Navigation
const Drawer = createDrawerNavigator();

//Light Theme
const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#fff",
    text: "#20255A",
    primary: "#FF4040",
    accent: "#20255A",
  },
};

//Dark Theme
const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#222",
    text: "#fff",
    primary: "#FF4040",
    accent: "#20255A",
  },
};

//Main Navigation Render Method
const MainNavigation = () => {
  //Use Context
  const { isDarkTheme } = useContext(Context);
  //Theme Check
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeStack" component={HomeStack} />
          <Drawer.Screen name="SettingsStack" component={SettingsStack} />
          <Drawer.Screen name="AuthStack" component={AuthStack} />
          <Drawer.Screen name="BookmarksStack" component={BookmarksStack} />
          <Drawer.Screen name="AboutStack" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainNavigation;
