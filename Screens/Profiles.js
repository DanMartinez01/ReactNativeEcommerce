import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { usePutImageMutation } from "../src/services/ecApi";
import { useGetImageQuery } from "../src/services/ecApi";
// import * as Location from "expo-location";

const Profiles = ({ navigation }) => {
  // const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const [putImage, result] = usePutImageMutation();

  const { data, isLoading, error, isError, refetch } = useGetImageQuery();

  const defaultImage =
    "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000";

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });

      refetch();
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("No le has dado permiso a la Aplicación para acceder a tu cámara!");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });

      console.log(result);

      if (!result.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        refetch();
      }
    }
  };

  const getCoords = async () => {
    // Espera en este paso que nos de permiso
    let { status } = await Location.requestForegroundPermissionsAsync();

    // console.log(status);

    // Mensaje de permiso denegado
    if (status !== "granted") {
      console.log("Permiso fue denegado");
      return;
    }

    // En este paso se obtiene la latitud y longitud como "location"
    // Espera en este paso a obtener las coords
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    navigation.navigate("mapaLoc", { location });
  };

  // console.log("COORDENADAS", location);

  // const openLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     setErrorMsg("Permission to access location was denied");
  //     return;
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   setLocation(location);
  //   navigation.navigate("map", { location });
  // };

  return (
    // <ScrollView>
    <View
      style={{
        alignItems: "center",
        padding: 10,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {/* {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator
              style={{ flex: 1 }}
              size="large"
              color="#0000ff"
            />
          </View>
        ) : ( */}
      <Image
        style={styles.image}
        source={{
          uri: data ? data.image : defaultImage,
        }}
      />
      {/* )} */}

      <View style={styles.buttonContainer}>
        <View style={styles.containerButton}>
          <Pressable style={styles.containerIcon} onPress={() => openCamera()}>
            <Entypo name="camera" size={24} color="black" />
          </Pressable>
          <Text style={styles.textButton}>Abrir Cámara</Text>
        </View>
        <View style={styles.containerButton}>
          <Pressable style={styles.containerIcon} onPress={() => pickImage()}>
            <FontAwesome name="photo" size={24} color="black" />
          </Pressable>
          <Text style={styles.textButton}>Abrir Galería de fotos</Text>
        </View>
        <View style={styles.containerButton}>
          <Pressable
            style={styles.containerIcon}
            onPress={() =>
              // navigation.navigate("mapaLoc")
              getCoords()
            }
          >
            <Feather name="map" size={24} color="black" />
          </Pressable>
          <Text style={styles.textButton}>Abrir Mapa</Text>
        </View>
        {/* <View style={styles.containerButton}>
          <Pressable
            style={styles.containerIcon}
            onPress={() => navigation.navigate("sounds")}
          >
            <MaterialIcons name="audiotrack" size={24} color="black" />
          </Pressable>
          <Text style={styles.textButton}>Escuchar Audios</Text>
        </View> */}
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 40,
  },
  buttonContainer: {
    marginTop: 30,
  },
  containerButton: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 8,
  },
  textButton: {
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },
});

export default Profiles;

// Buenos Aires Coordenadas
// {
//   latitude: -34.612172,
//   longitude: -58.403896,
//   latitudeDelta: 0.04,
//   longitudeDelta: 0.09,
// }
