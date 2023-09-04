import React from "react";
import { TouchableOpacity, Dimensions, View, Text } from "react-native";
let { width } = Dimensions.get("window");
import ProductCard from "./ProductCard";
const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={{ width: "50%" }}
      onPress={() => {
        props.navigation.navigate("Product Detail", { item: item });
      }}
    >
      <View style={{ width: width, backgroundColor: "gainsboro" }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
