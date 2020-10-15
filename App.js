// Import Libraries
import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./src/screens/SplashScreen";
import MainScreen from "./src/screens/MainScreen";

// Import Icons
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerLeft: () => (
              <FontAwesome5
                name="align-justify"
                size={26}
                color="black"
                style={{ paddingLeft: 15 }}
                onPress={() => alert("This is a button!")}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
