import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {item.title} </Text>

      <Image
        style={styles.image}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#373d20",
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 20,
    color: "#373d20",
  },
  image: {
    marginRight: 10,
    borderRadius: 100,
    height: 60,
    width: 60,
  },
});

export default ProductItem;
