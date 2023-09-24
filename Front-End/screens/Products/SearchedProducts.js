import React from "react";
import { View, StyleSheet } from "react-native"; // Note the corrected import statement here
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";

const SearchedProducts = (props) => {
  const { productsFiltered } = props;
  return (
    <Content>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem
            onPress={() => {
              props.navigation.navigate("Product Detail", { item: item });
            }}
            key={item._id}
            avatar
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png",
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={StyleSheet.center}>
          <Text style={{ alignSelf: "center" }}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </Content>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchedProducts;
