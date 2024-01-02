import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "./Header";
import { useGetProductsQuery, useGetCategoriesQuery } from "../services/ecApi";
import { ScrollView, TouchableOpacity } from "react-native";

const FeaturedProducts = ({ products, navigation }) => {
  const renderFeaturedProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.featuredProductContainer}
        onPress={() => console.log("presed")}
      >
        <Image
          source={{
            uri: item.images[0],
          }}
          style={styles.featuredProductImage}
        />
        <Text style={styles.featuredProductName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.featuredContainer}>
      {/* <Header title="Featured products" /> */}
      <Text style={styles.featuredTitle}>Featured Products:</Text>
      <FlatList
        data={products} /* Display the first 5 products */
        keyExtractor={(item) =>
          item.id.toString()
        } /* Assuming each product has a unique 'id' property */
        horizontal
        renderItem={renderFeaturedProduct}
        style={styles.featuredList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  featuredContainer: {
    padding: 14,
    marginVertical: 30,
  },
  featuredList: {
    height: 70,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
    color: "black",
  },
  featuredProductContainer: {
    borderRadius: 50, // Make it circular
    overflow: "hidden", // Ensure content doesn't overflow the circle
  },
  featuredProductImage: {
    width: 70, // Adjust as needed
    height: 70, // Adjust as needed
    resizeMode: "cover",
  },
  featuredProductName: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default FeaturedProducts;
