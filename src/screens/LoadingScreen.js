//Import Libraries
import React from "react";
import { StyleSheet, View, Image } from "react-native";

//Import Icon
import loader from "../../assets/loader.gif";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={loader} style={styles.loader} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  loader: {
    height: 110,
    width: 110,
  },
});
