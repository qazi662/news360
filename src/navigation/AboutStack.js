//Import Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Import Screens
import AboutScreen from "../drawers/AboutScreen";

//Import Icons
import { Ionicons } from "@expo/vector-icons";

//Create Stack
const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
  //Use Theme Colors
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
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
          headerTitle: "About Us",
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
