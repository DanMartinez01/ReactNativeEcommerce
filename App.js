// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Home />
      <ProductDetail />
      <StatusBar style="auto" /> */}
      <RootNavigation />
    </NavigationContainer>
  );
}
