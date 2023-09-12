import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../src/components/Search";
import Header from "../src/components/Header";
import { products } from "../Data/products";
import ProductItem from "../src/components/ProductItem";

const Products = ({ category }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  console.log("TEXTO", text);
  console.log("Category Prod", categoryProd);

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === category);
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }
  }, [text, category]);

  return (
    <View>
      <Header title="Productos" />
      <Search text={text} setText={setText} />

      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default Products;
