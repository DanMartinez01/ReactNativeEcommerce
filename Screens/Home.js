import { View, Text } from "react-native";
import React from "react";
import Header from "../src/components/Header";
import Categories from "../src/components/Categories";

const Home = () => {
  return (
    <View>
      <Header title="Categorías" />
      <Categories />
    </View>
  );
};

export default Home;
