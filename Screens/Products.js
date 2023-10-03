import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../src/components/Search";
import Header from "../src/components/Header";
import { products } from "../Data/products";
import ProductItem from "../src/components/ProductItem";
import { useSelector } from "react-redux";

const Products = ({ category, navigation, route }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState("");
  const { item } = route.params;
  console.log("items from productsJs", item);

  const products = useSelector((state) => state.homeSlice.allProducts);

  // useEffect(() => {
  //   const categoryProducts = products.filter((el) => el.category === category);
  //   setCategoryProd(categoryProducts);

  //   if (text) {
  //     const titleProduct = products.filter(
  //       (el) => el.title.toLowerCase() === text.toLowerCase()
  //     );
  //     setCategoryProd(titleProduct);
  //   }
  // }, [item, text]);

  const productsFilterByCategory = useSelector(
    (state) => state.homeSlice.productsFilterByCategory
  );

  useEffect(() => {
    setCategoryProd(productsFilterByCategory);

    if (text) {
      const titleProduct = products.filter(
        (el) => el.title.toLowerCase() === text.toLowerCase()
      );
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <View>
      <Header title={item} navigation={navigation} />
      <Search text={text} setText={setText} />
      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Products;
