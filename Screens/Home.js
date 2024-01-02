import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import banner from "../assets/banner.png";
import Header from "../src/components/Header";
import FeaturedProducts from "../src/components/FeaturedProducts";
import Icon from "react-native-vector-icons/MaterialIcons";
import CategoryItem from "../src/components/CategoryItem";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../src/services/ecApi";

// import Carousel from "react-native-snap-carousel";

const Home = ({ navigation }) => {
  // const theme = useTheme();
  const deviceWidth = Dimensions.get("window").width;

  // const views1 = [
  //   {
  //     imgUrl: "https://picsum.photos/200/300?random=1",
  //     title: "Airport Cabs",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/200/300?random=3",
  //     title: "Gift Cards",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/200/300?random=5",
  //     title: "Hourly Stays",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/200/300?random=7",
  //     title: "Travel Insurance",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/200/300?random=9",
  //     title: "Forex",
  //   },
  //   {
  //     imgUrl: "https://picsum.photos/200/300?random=11",
  //     title: "HomeStays & Villas",
  //   },
  // ];

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();
  const { data: products } = useGetProductsQuery();

  return (
    <View style={{ flex: 1, backgroundColor: "#ebebeb" }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View>
              <Image
                source={banner}
                style={{
                  width: deviceWidth,
                  height: 350,
                  resizeMode: "contain",
                }}
              />
            </View>
            {/* <Carousel
              layout={"default"}
              data={views1}
              // renderItem={renderItem1}
              sliderWidth={400}
              itemWidth={350}
            /> */}

            <View style={styles.shippingText}>
              <Icon name="local-shipping" size={20} color="green" margin="1" />
              <Text>Worldwide shipping every day!</Text>
            </View>
            <View style={styles.featured}>
              <FeaturedProducts products={products} navigation={navigation} />
            </View>
            <Header title="Categories" />
            <FlatList
              style={styles.flat}
              showsVerticalScrollIndicator={false}
              data={categories}
              keyExtractor={(key) => key}
              numColumns={2}
              onEndReached={() => console.log("Aquí")}
              renderItem={({ item }) => (
                <CategoryItem
                  navigation={navigation}
                  item={item}
                  products={products}
                />
              )}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // scrollViewContent: {
  //   backgroundColor: "white",
  //   flex: 1,
  // },
  flat: {
    flexDirection: "column",
    backgroundColor: "#ebebeb",
  },
  shippingText: {
    backgroundColor: "white",
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    marginTop: 10,
    borderRadius: 4,
    width: "90%",
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default Home;
