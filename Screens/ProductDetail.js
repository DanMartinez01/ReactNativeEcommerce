import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { products } from "../Data/products";

function ProductDetail() {
  const initialProd = products[0];
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {initialProd.title} </Text>
      <Image
        style={styles.image}
        source={{ uri: initialProd.images[0] }}
        resizeMode="cover"
      />
      <Text style={styles.text}>Brand: {initialProd.brand}</Text>
      <Text style={styles.text}>Description: {initialProd.description}</Text>
      <Text style={styles.text}>Price: ${initialProd.price}</Text>
      <Text style={styles.text}>Rating: {initialProd.rating}</Text>
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
