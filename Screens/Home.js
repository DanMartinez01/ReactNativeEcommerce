import { View, Text } from "react-native";
import React from "react";
import Header from "../src/components/Header";
import Categories from "../src/components/Categories";
import Products from "./Products";

const Home = () => {
  return (
    <View>
      <Header title="Categorías" />
      <Products />
      <Categories />
    </View>
  );
};

export default Home;
