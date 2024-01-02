import { React } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome"; // You may need to install this library

const CustomHeader = ({ navigation }) => {
  const onCartPress = () => {
    navigation.navigate("ShoppingCart");
    console.log("shopping");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="location-arrow" size={20} color="black" />
        <Text style={styles.addressText}>La Yerra 4547-Parque Leloir</Text>
      </View>
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={() => onCartPress()}
      >
        <Icon name="shopping-cart" size={20} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "yellow",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    padding: 10,
  },
  addressText: {
    marginLeft: 5,
    fontSize: 16,
    color: "black",
  },
};

export default CustomHeader;
