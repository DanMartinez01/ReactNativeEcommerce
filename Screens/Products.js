import { FlatList, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../src/components/Search";
import Header from "../src/components/Header";
import ProductItem from "../src/components/ProductItem";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../src/services/ecApi";

const Products = ({ route, navigation }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);
  const { item } = route.params;
  const products = useSelector((state) => state.homeSlice.allProducts);
  const { data, isLoading, isError } = useGetProductsQuery();
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
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <Header title={item} navigation={navigation} />

      <Search text={text} setText={setText} />

      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default Products;
