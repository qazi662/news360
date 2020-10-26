//Import Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Import Screens
import BookmarksScreen from "../drawers/BookmarksScreen";

//Import Icons
import { Ionicons } from "@expo/vector-icons";

//Create Stack
const Stack = createStackNavigator();

const BooksmarksStack = ({ navigation }) => {
  //Use Theme Colors
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
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
          headerTitle: "Bookmarks",
        }}
      />
    </Stack.Navigator>
  );
};

export default BooksmarksStack;
