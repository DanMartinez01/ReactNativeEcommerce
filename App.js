// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Home />
      <ProductDetail />
      <StatusBar style="auto" /> */}
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
