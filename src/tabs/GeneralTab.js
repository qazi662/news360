//Import Libraries
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import axios from "axios";

//Loading Screens
import LoadingScreen from "../screens/LoadingScreen";

//Import Components
import HorizontalNewsItem from "../components/HorizontalNewsItem";
import VerticalNewsItem from "../components/VerticalNewsItem";
import RenderFooter from "../components/RenderFooter";

//Import API Key
import API from "../../env";
import { newAPI } from "../../env";
import { set } from "react-native-reanimated";

const GeneralTab = () => {
  //State Values
  const [news, setNews] = useState([]);
  const [testNews, setTestNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [loadMore, setLoadMore] = useState(false);

  //Function to get response
  const getResponse = () => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=general&apiKey=${newAPI}`
      )
      .then((res) => {
        //Set News
        setNews(res.data.articles);
        let listData = news;
        let data = [...listData, ...res.data.articles];
        // let data = listData.concat(res.data.articles);
        setTestNews(data);
        // setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  // Life cycle Method
  useEffect(() => {
    getResponse();
  }, []);

  // Method To Get More Items At The End
  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
      getResponse();
    }
  };

  // Method To Get Swipe To Refresh
  const onRefresh = () => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&page=1&category=general&apiKey=${newAPI}`
      )
      .then((res) => {
        //Set News
        let data = res.data.articles;
        setNews(data);
        setLoading(false);
        setIsRefreshing(false);
        setPage(1);
      })
      .catch((error) => {
        setLoading(false);
        setIsRefreshing(false);
        console.log(error);
      });
  };

  if (loading && page === 1) {
    return <LoadingScreen />;
  }

  console.log(news);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <FlatList
        data={news}
        // data={news.slice(7)}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <VerticalNewsItem data={item} />;
        }}
        // ListHeaderComponent={() => (
        //   <FlatList
        //     data={news.slice(0, 10)}
        //     horizontal
        //     showsHorizontalScrollIndicator={false}
        //     keyExtractor={(item) => item.title}
        //     renderItem={({ item }) => {
        //       return <HorizontalNewsItem data={item} />;
        //     }}
        //   />
        // )}
        ListFooterComponent={() => <RenderFooter loading={loading} />}
        onEndReachedThreshold={0.4}
        onEndReached={handleLoadMore}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default GeneralTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
