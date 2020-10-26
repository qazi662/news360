//Import Libraries
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";

//Import Tabs
import GeneralTab from "../tabs/GeneralTab";
import BusinessTab from "../tabs/BusinessTab";
import EntertainmentTab from "../tabs/EntertainmentTab";
import HealthTab from "../tabs/HealthTab";
import ScienceTab from "../tabs/ScienceTab";
import SportsTab from "../tabs/SportsTab";
import TechnologyTab from "../tabs/TechnologyTab";

//Create Tabs
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  //Use Theme
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: colors.text,
        indicatorStyle: { backgroundColor: "#FF4040" },
        labelStyle: { fontFamily: "Cairo_400Regular" },
      }}
    >
      <Tab.Screen name="General" component={GeneralTab} />
      <Tab.Screen name="Business" component={BusinessTab} />
      <Tab.Screen name="Entertainment" component={EntertainmentTab} />
      <Tab.Screen name="Health" component={HealthTab} />
      <Tab.Screen name="Science" component={ScienceTab} />
      <Tab.Screen name="Sports" component={SportsTab} />
      <Tab.Screen name="Technology" component={TechnologyTab} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
