import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cart from "../screens/Cart/Cart";
import CheckoutNavigator from "./CheckoutNavigator";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checkout"
        component={CheckoutNavigator}
        options={{
          title: "Checkout",
          headerLeft: false, // Hide back link
        }}
      />
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <MyStack />;
}
