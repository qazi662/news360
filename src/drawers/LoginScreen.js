//Import Libraries
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  TextInput,
  Button,
  IconButton,
  Colors,
  useTheme,
} from "react-native-paper";

//Import Assets
import LogoLight from "../../assets/logoLight.png";
import LogoDark from "../../assets/logoDark.png";

const LoginScreen = ({ navigation }) => {
  //State Values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Use Theme
  const theme = useTheme();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image source={theme.dark ? LogoDark : LogoLight} style={styles.logo} />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.password}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        mode="outlined"
      />
      <Button
        mode="contained"
        style={styles.signin}
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
      <Button mode="text" onPress={() => console.log("Pressed")}>
        Forgot Password?
      </Button>
      <View style={styles.socialButtonsContainer}>
        <IconButton
          icon="google"
          style={styles.socialButton}
          color={Colors.red500}
          size={30}
          onPress={() => console.log("Pressed")}
        />
        <IconButton
          icon="facebook"
          style={styles.socialButton}
          color={Colors.red500}
          size={30}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <Button
        mode="outlined"
        style={styles.signupButton}
        onPress={() => navigation.navigate("Signup")}
      >
        Already have an account? Sign Up
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logo: {
    alignSelf: "center",
    width: 125,
    height: 60,
    marginBottom: 80,
  },
  email: {
    height: 50,
  },
  password: {
    height: 50,
    marginBottom: 10,
  },
  signin: {
    height: 45,
    justifyContent: "center",
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    backgroundColor: Colors.red100,
  },
  signupButton: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
  },
});
