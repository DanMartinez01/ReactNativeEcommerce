import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "#766153",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontFamily: "PermanentMarker",
    fontSize: 20,
    color: "#eff1ed",
    margin: "auto",
  },
});
