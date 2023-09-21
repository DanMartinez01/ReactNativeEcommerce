import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CategoryItem = ({ item, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("products")}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    marginHorizontal: 20,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",

    // BORDER STYLES
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,

    // Text styles
    textAlign: "center",
    padding: 8,
  },
});

export default CategoryItem;
