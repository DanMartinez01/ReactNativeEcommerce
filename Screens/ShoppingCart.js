import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ShoppingCart = () => {
  const cartItems = [
    {
      id: "1",
      name: "Product 1",
      quantity: 2,
      price: 25.99,
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      id: "2",
      name: "Product 2",
      quantity: 1,
      price: 14.99,
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => console.log("Decrease quantity")}
          >
            <Icon name="minus" size={16} color="white" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => console.log("Increase quantity")}
          >
            <Icon name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    color: "#555",
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
    paddingTop: 10,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ShoppingCart;
