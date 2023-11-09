import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home";
import Products from "../../Screens/Products";
import ProductDetail from "../../Screens/ProductDetail";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="home" options={{ title: "Home" }} />
      <Stack.Screen
        component={Products}
        name="products"
        options={{ title: "Products" }}
      />
      <Stack.Screen
        component={ProductDetail}
        name="productDetail"
        options={{ title: "Product details" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
