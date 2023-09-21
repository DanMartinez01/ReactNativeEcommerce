import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { products } from "../Data/products";

function ProductDetail({ route }) {
  const selectedItem = route.params.selectedItem;
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {selectedItem.title} </Text>
      <Image
        style={styles.image}
        source={{ uri: selectedItem.images[0] }}
        resizeMode="cover"
      />
      <Text style={styles.text}>Brand: {selectedItem.brand}</Text>
      <Text style={styles.text}>Description: {selectedItem.description}</Text>
      <Text style={styles.text}>Price: ${selectedItem.price}</Text>
      <Text style={styles.text}>Rating: {selectedItem.rating}</Text>
      <Pressable onPress={() => console.log("added")}>
        <Text>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#373d20",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
    color: "#373d20",
    textAlign: "left",
    fontFamily: "",
  },
  image: {
    marginBottom: 10,
    borderRadius: 50,
    height: 300,
    width: 300,
  },
});
export default ProductDetail;
