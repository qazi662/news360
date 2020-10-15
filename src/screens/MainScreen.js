// Import Libraries
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import HomeScreen from "../drawers/HomeScreen";
import SettingsScreen from "../drawers/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function MainScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
