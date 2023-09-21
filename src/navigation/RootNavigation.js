import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home";
// import Products from "../screens/Products";
// import ProductDetail from "../screens/ProductDetail";
// import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="Home" />
      {/* <Stack.Screen component={Products} name="products" />
      <Stack.Screen component={ProductDetail} name="productDetail" /> */}
    </Stack.Navigator>
  );
};

export default RootNavigation;
