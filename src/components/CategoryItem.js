import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { setCategory } from "../redux/slices/homeSlice";
import { useDispatch } from "react-redux";

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const onHandleItem = () => {
    dispatch(setCategory(item));
    navigation.navigate("products", { item: item });
  };
  console.log("item from categoryItem", item);
  return (
    // <Pressable onPress={() => navigation.navigate("products")}>
    <Pressable onPress={() => onHandleItem()}>
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
