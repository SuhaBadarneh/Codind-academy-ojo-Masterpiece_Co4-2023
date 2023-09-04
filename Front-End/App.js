import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//Navigators
import Main from "./Navigators/Main";
//Screens
import ProductContainer from "../frontend/screens/Products/ProductContainer";
import Header from "./Shared/Header";
export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
}
