//Import Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Import Screens
import LoginScreen from "../drawers/LoginScreen";
import SignupScreen from "../drawers/SignupScreen";

//Import Icons
import { Ionicons } from "@expo/vector-icons";

//Create Stack
const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  //Use Theme Colors
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
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
          headerTitle: "Login",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitleStyle: { fontFamily: "Cairo_700Bold" },
          headerTitle: "Signup",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
