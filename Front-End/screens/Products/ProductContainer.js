import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
const data = require("../../assets/data/products.json");
const productsCategories = require("../../assets/data/categories.json");
import ProductList from "./ProductList";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";

export default ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productsCategories);
    setActive(-1);
    setProductsCtg(data);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState();
    };
  }, []);

  const searchProducts = (text) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setProductsFiltered(filteredProducts);
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  //categories
  const changeCtg = (ctg) => {
    ctg === "all"
      ? [setProductsCtg(initialState), setActive(true)]
      : [
          setProductsCtg(
            products.filter((i) => i.category.$oid === ctg),
            setActive(true)
          ),
        ];
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="search"
            onFocus={openList}
            onChangeText={(text) => searchProducts(text)}
          />
          {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProducts
          navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View>
            <Banner />
          </View>
          <View>
            <CategoryFilter
              categories={categories}
              CategoryFilter={changeCtg}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            />
          </View>
          {productsCtg.length > 0 ? (
            <View style={styles.listContainer}>
              {productsCtg.map((item) => (
                <ProductList
                  navigation={props.navigation}
                  key={item._id.$oid}
                  item={item}
                />
              ))}
            </View>
          ) : (
            <View style={[styles.center, { height: "40%" }]}>
              <Text>No Products Found</Text>
            </View>
          )}
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
