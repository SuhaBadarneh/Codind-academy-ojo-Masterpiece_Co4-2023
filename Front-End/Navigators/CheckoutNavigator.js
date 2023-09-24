import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Payment from "../screens/Cart/Checkout/Payment";
import Confirm from "../screens/Cart/Checkout/Confirm";
import Checkout from "../screens/Cart/Checkout/Checkout";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#EB7407",
        tabBarInactiveTintColor: "#72634E",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
}

export default function CheckoutNavigator() {
  return <MyTabs />;
}
