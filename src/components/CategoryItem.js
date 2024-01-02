import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Avatar, Button, Card, Surface } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { setCategory } from "../redux/slices/homeSlice";
import { useDispatch } from "react-redux";

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const onHandleItem = () => {
    dispatch(setCategory(item));
    navigation.navigate("products", { item: item });
  };
  console.log("item from categoryItem", item);
  return (
    <View style={{ flex: 1 }}>
      <Card style={{ width: 150, margin: 10, marginVertical: 20 }}>
        <Card.Title title={item} />
        <Card.Actions>
          <Pressable
            onPress={() => onHandleItem()}
            style={{ color: theme.colors.onPrimary }}
          >
            <Text style={{ color: theme.colors.onBackground }}>
              Search ---{">"}
            </Text>
          </Pressable>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
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
