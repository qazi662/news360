//Import Libraries
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

//Main Render Method
const HorizontalNewsItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: data.urlToImage }}
      >
        <Text style={styles.title}>{data.title}</Text>
      </ImageBackground>
    </View>
  );
};

export default HorizontalNewsItem;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    margin: 5,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
  },
  bg: {
    flex: 1,
    width: 350,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  title: {
    color: "white",
    fontFamily: "Cairo_400Regular",
    paddingHorizontal: 10,
    lineHeight: 16,
    paddingVertical: 5,
    paddingTop: 10,
    fontSize: 14,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
