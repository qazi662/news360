//Import Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Import Screens
import SettingsScreen from "../drawers/SettingsScreen";

//Import Icons
import { Ionicons } from "@expo/vector-icons";

//Create Stack
const Stack = createStackNavigator();

const SettingsStack = ({ navigation }) => {
  //Use Theme Colors
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={30}
              color={colors.text}
              style={{ paddingHorizontal: 20 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitleStyle: { fontFamily: "Cairo_700Bold" },
          headerTitle: "Settings",
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
