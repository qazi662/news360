//Import Libraries
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  useTheme,
} from "react-native-paper";

//Import Context Provider
import Context from "../context/ContextProvider";

//Import Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Main Render Function
const DrawerContent = (props) => {
  //Use Context Provider
  const { toggleTheme } = useContext(Context);

  //Use Theme
  const theme = useTheme();
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      {/* Status Bar color for whole app */}
      <StatusBar style={theme.dark ? "light" : "dark"} />
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* User Profile Section */}
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <TouchableRipple
                onPress={() => props.navigation.navigate("AuthStack")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    source={{
                      uri:
                        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
                    }}
                    size={50}
                  />
                  <View style={{ marginLeft: 15 }}>
                    <Title
                      style={styles.title}
                      onPress={() => props.navigation.navigate("AuthStack")}
                    >
                      User
                    </Title>
                    <Caption style={styles.caption}>Username</Caption>
                  </View>
                </View>
              </TouchableRipple>
            </View>
          </View>
          {/* User Profile Section End */}
          {/* Top Drawer Items */}
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={colors.primary}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.text }}
              label="Home"
              onPress={() => props.navigation.navigate("HomeStack")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={colors.primary}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.text }}
              label="Bookmarks"
              onPress={() => props.navigation.navigate("BookmarksStack")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="settings-outline"
                  color={colors.primary}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.text }}
              label="Settings"
              onPress={() => props.navigation.navigate("SettingsStack")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  color={colors.primary}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.text }}
              label="About"
              onPress={() => props.navigation.navigate("AboutStack")}
            />
            <DrawerItem
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="share-variant"
                  color={colors.primary}
                  size={size}
                />
              )}
              labelStyle={{ color: colors.text }}
              label="Invite Friends"
              onPress={() => alert("Pressed")}
            />
          </Drawer.Section>
          {/* Top Drawer Items End */}
          {/* Dark Theme Button */}
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Mode</Text>
                <View pointerEvents="none">
                  <Switch value={theme.dark} color={colors.primary} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          {/* Dark Theme Button End */}
        </View>
      </DrawerContentScrollView>
      {/* Bottom Drawer Items */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={colors.primary}
              size={size}
            />
          )}
          labelStyle={{ color: colors.text }}
          label="Sign Out"
          onPress={() => alert("Pressed")}
        />
      </Drawer.Section>

      {/* Bottom Drawer Items End */}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    marginTop: 25,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
