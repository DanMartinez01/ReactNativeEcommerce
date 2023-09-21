// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";

export default function App() {
  return (
    <NavigationContainer>
      <Home />
      {/* <ProductDetail />
      <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
