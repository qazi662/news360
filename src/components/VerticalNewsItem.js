//Import Libraries
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Caption } from "react-native-paper";

//Main Render Method
const VerticalNewsItem = ({ data }) => {
  let date = new Date(Date.parse(`${data.publishedAt}`)).toDateString();
  let time = new Date(Date.parse(`${data.publishedAt}`)).toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Image
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: data.urlToImage }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Caption>
          {time}, {date}
        </Caption>
      </View>
    </View>
  );
};

export default VerticalNewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    shadowColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  bg: {
    flex: 0.23,
    width: 50,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  titleContainer: {
    flex: 0.77,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: "#20255A",
    fontFamily: "Cairo_700Bold",
    fontSize: 13,
    lineHeight: 16,
  },
});
