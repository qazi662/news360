import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import Loader from "../../assets/loader.gif";

const RenderFooter = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={Loader} style={styles.image} />
    </View>
  );
};

export default RenderFooter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    paddingVertical: 15,
    width: 80,
    height: 80,
  },
});
