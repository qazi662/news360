//Import Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Import Screens
import HomeScreen from "../drawers/HomeScreen";

//Import Icons
import { Ionicons } from "@expo/vector-icons";

//Create Stack
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  //Use Theme Colors
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
          headerTitleStyle: { fontFamily: "Cairo_700Bold", color: colors.text },
          headerTitle: "360NEWS",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
