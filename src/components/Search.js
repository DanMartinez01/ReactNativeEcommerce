import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ text, setText }) => {
  const clearText = () => {
    setText(null);
  };

  return (
    <View style={estilos.container}>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={estilos.input}
        placeholder="Busca un producto aquí.."
      />
      <Pressable onPress={() => clearText()}>
        <AntDesign name="close" size={30} color="#373d20" />
      </Pressable>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    width: "78%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#373d20",
    padding: 10,
    fontSize: 20,
    marginRight: 15,
  },
});

export default Search;
