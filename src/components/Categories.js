import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../../Data/categories";
import CategoryItem from "../components/CategoryItems";

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={({ item }) => <CategoryItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eff1ed",
    paddingTop: 20,
  },
});

export default Categories;
