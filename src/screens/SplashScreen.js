// Libraries
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

// Loading
import { AppLoading } from "expo";

// Assets
import splashBg from "../../assets/splash_bg.png";
import logo from "../../assets/logo.png";

// Fonts
import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_400Regular,
  Cairo_700Bold,
} from "@expo-google-fonts/cairo";

const SplashScreen = ({ navigation }) => {
  // Loading Fonts
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_400Regular,
    Cairo_700Bold,
  });

  // Check to see if fonts loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.splash_style}>
      <ImageBackground source={splashBg} style={styles.background_style}>
        <Image source={logo} style={styles.logo_style} />
        <Text style={styles.splash_comment_style}>
          Daily update news in daily news
        </Text>
        <TouchableOpacity
          style={styles.splash_button_style}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.splash_button_text_style}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash_style: {
    flex: 1,
    flexDirection: "column",
  },
  background_style: {
    width: "100%",
    height: "100%",
  },
  logo_style: {
    alignSelf: "center",
    marginTop: "50%",
    width: "50%",
    resizeMode: "contain",
  },
  splash_comment_style: {
    alignSelf: "center",
    position: "absolute",
    bottom: "25%",
    color: "white",
    fontSize: 18,
    width: "40%",
    textAlign: "center",
    fontFamily: "Cairo_700Bold",
  },
  splash_button_style: {
    backgroundColor: "white",
    alignSelf: "center",
    position: "absolute",
    bottom: "10%",
    paddingVertical: 15,
    paddingHorizontal: "20%",
    borderRadius: 50,
  },
  splash_button_text_style: {
    alignSelf: "center",
    textAlign: "center",
    color: "black",
    fontSize: 15,
    fontFamily: "Cairo_200ExtraLight",
  },
});
