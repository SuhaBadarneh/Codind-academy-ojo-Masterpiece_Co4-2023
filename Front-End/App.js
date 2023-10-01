import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
// Context API
import Auth from "./Context/store/Auth";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
//Navigators
import Main from "./Navigators/Main";
//Screens
import ProductContainer from "../frontend/screens/Products/ProductContainer";
import Header from "./Shared/Header";
export default function App() {
  return (
    <Auth>
      <RootSiblingParent>
        <Provider store={store}>
          <NavigationContainer>
            <Header />
            <Main />
          </NavigationContainer>
        </Provider>
      </RootSiblingParent>
    </Auth>
  );
}
