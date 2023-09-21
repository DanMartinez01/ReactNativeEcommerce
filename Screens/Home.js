import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../src/components/Header";
import Categories from "../src/components/Categories";
import Products from "./Products";
import ProductItem from "../src/components/ProductItem";
import Navbar from "../src/components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Categorías" />
        <Products category="smartphones" navigation={navigation} />
        <Categories navigation={navigation} />
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
