import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Avatar, Button, Card, Surface, useTheme } from "react-native-paper";
import React from "react";
import { colors } from "../theme/colors";
import { useWindowDimensions } from "react-native";
import { setProductSelected } from "../redux/slices/homeSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ item, navigation }) => {
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();
  const theme = useTheme();
  const onHandleProductDetail = () => {
    console.log("Item pressed in Product Item", item);
    console.log("image", item.images[0]);

    dispatch(setProductSelected(item));

    navigation.navigate("productDetail");
  };

  return (
    <View style={styles.container}>
      <Card style={{ marginTop: 40, width: 200, height: 300 }}>
        <Card.Title title={item.title} />
        <Card.Cover
          source={{ uri: item.images[0] }}
          style={{ width: 200, height: 200 }}
        />
        <Card.Actions>
          <Pressable onPress={() => onHandleProductDetail()}>
            <Text style={styles.text}>Detalle ---{">"}</Text>
          </Pressable>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginTop: 20,
  },
  text: {
    fontWeight: "200",
    color: "white",
  },
  textMin: {
    fontSize: 8,
    width: "70%",
  },
});

export default ProductItem;
