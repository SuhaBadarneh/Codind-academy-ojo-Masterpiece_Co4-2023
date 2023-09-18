import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  Text,
  Button,
  Left,
  H1,
  List,
  ListItem,
  Thumbnail,
  Body,
  Right,
} from "native-base";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartAction";

const Cart = (props) => {
  let total = 0;

  // Calculate the total from cart items
  if (props.cartItems.length) {
    total = props.cartItems.reduce((acc, item) => acc + item.product.price, 0);
    total = total.toFixed(3); // Round to two decimal places
  }

  return (
    <View style={styles.container}>
      {props.cartItems.length ? (
        <Container>
          <H1>Cart</H1>
          <ScrollView style={styles.scrollView}>
            <List>
              {props.cartItems.map((item, index) => (
                <ListItem key={index} avatar>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: item.product.image
                          ? item.product.image
                          : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png",
                      }}
                    />
                  </Left>
                  <Body>
                    <Text style={{ color: "#8D7B68", fontWeight: "bold" }}>
                      {item.product.name}
                    </Text>
                    <Text
                      note
                      style={{
                        color: "#8D7B68",
                        fontWeight: "light",
                      }}
                    >
                      ${item.product.price}
                    </Text>
                  </Body>
                  <Right>
                    {/* You can add additional actions here */}
                    <Button
                      transparent
                      style={styles.removeButtonContainer}
                      onPress={() => props.removeFromCart(item)}
                    >
                      <Text style={styles.removeButton}>Remove</Text>
                    </Button>
                  </Right>
                </ListItem>
              ))}
            </List>
          </ScrollView>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>Total: ${total}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => {
                props.clearCart();
              }}
            >
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => {
                props.navigation.navigate("checkout");
              }}
            >
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Cart Is Empty</Text>
          <Text style={styles.emptyCartText}>Add Products to your cart</Text>
        </Container>
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7F6448",
  },
  scrollView: {
    flex: 1, // Make the ScrollView take the available space
  },
  priceContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    marginTop: 10,
    backgroundColor: "white",
    borderTopWidth: 2,
    borderTopColor: "#F4DCC7",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8D7B68",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribute buttons evenly
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  checkoutButton: {
    flex: 1, // Take equal space
    backgroundColor: "#8D7B68",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5, // Add margin for spacing
  },
  clearButton: {
    flex: 1, // Take equal space
    backgroundColor: "#EB7407",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5, // Add margin for spacing
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  removeButtonContainer: {},
  removeButton: {
    color: "#8D7B68",
    fontSize: 14,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
