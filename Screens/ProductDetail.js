import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../src/components/Header";
// import { AntDesign } from "@expo/vector-icons";
import { colors } from "../src/theme/colors";
import { useSelector } from "react-redux";

const ProductDetail = ({ navigation, route }) => {
  // const { item } = route.params;

  const productSelected = useSelector(
    (state) => state.homeSlice.productSelected
  );

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <Header title="Detalle" navigation={navigation} />
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: productSelected.images[0],
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}> {productSelected.title} </Text>
        </View>
        <Text style={styles.description}> {productSelected.description} </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  containerImage: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Dancing",
    marginTop: 15,
    color: "white",
  },
  price: {
    fontSize: 18,
    fontFamily: "Dancing",
    color: "white",
  },
  description: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 30,
    marginHorizontal: 10,
    color: "white",
  },
});

export default ProductDetail;
