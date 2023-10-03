import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Header from "../src/components/Header";
import Categories from "../src/components/Categories";
import Products from "./Products";
import ProductItem from "../src/components/ProductItem";
import CategoryItem from "../src/components/CategoryItem";
// import { categories } from "../Data/categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const categories = useSelector((state) => state.homeSlice.allCategories);
  console.log(categories);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Categorías" />
        {/* <Products navigation={navigation} /> */}

        <FlatList
          data={categories}
          keyExtractor={(key) => key}
          renderItem={({ item }) => (
            <CategoryItem navigation={navigation} item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
