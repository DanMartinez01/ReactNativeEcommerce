import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Header from "../src/components/Header";
// import Categories from "../src/components/Categories";
// import Products from "./Products";
// import ProductItem from "../src/components/ProductItem";
import CategoryItem from "../src/components/CategoryItem";
// import { categories } from "../Data/categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../src/services/ecApi";
import { ScrollView } from "react-native-web";

const Home = ({ navigation }) => {
  const theme = useTheme();
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <View>
          <ActivityIndicator style={{}} size="small" color="#0000ff" />
        </View>
      ) : (
        <>
          <ScrollView
            style={{
              backgroundColor: "black",
              dark: true,
            }}
          >
            <Header title="Bibliografia" style={{ color: "white" }} />
            <FlatList
              style={styles.flat}
              data={categories}
              keyExtractor={(key) => key}
              numColumns={2}
              onEndReached={() => console.log("Aquí")}
              renderItem={({ item }) => (
                <CategoryItem navigation={navigation} item={item} />
              )}
            />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  flat: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: "auto",
    margin: "auto",
  },
});

export default Home;
