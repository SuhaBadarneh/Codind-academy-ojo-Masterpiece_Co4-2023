import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartAction";
import { Button, Left, Right } from "native-base"; // Import Left and Right from NativeBase
import Icon from "react-native-vector-icons/FontAwesome";

let { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;

  return (
    <View style={styles.container}>
      <Icon
        name="heart-o"
        size={24}
        color="#8D7B68"
        style={styles.favoriteIcon}
      />

      <View
        style={[
          styles.imageContainer,
          Platform.OS === "android" ? styles.androidShadow : styles.iosShadow,
        ]}
      >
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: image
              ? image
              : "https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png",
          }}
        />
      </View>
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      {/* Use Left and Right from NativeBase to position price and button */}
      <View style={styles.priceButtonContainer}>
        <Left>
          <Text style={styles.price}>${price}</Text>
        </Left>
        <Right>
          {countInStock > 0 ? (
            <Button
              style={styles.btn}
              rounded
              onPress={() => {
                props.addItemToCart(props);
              }}
            >
              <Text style={styles.btnText}>+</Text>
            </Button>
          ) : (
            <Text style={{ marginTop: 20, fontSize: 12 }}>
              Currently Unavailable
            </Text>
          )}
        </Right>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 15,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: width / 2 - 20 - 50,
    height: width / 2 - 20 - 50,
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: (width / 2 - 20 - 50) / 2,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: (width / 2 - 20 - 50) / 2,
  },
  androidShadow: {
    elevation: 8,
  },
  iosShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#8D7B68",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
      },
    }),
  },
  card: {
    marginBottom: 50,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    color: "#72634E",
  },
  priceButtonContainer: {
    flexDirection: "row", // Arrange price and button horizontally
    alignItems: "center",
    justifyContent: "space-between", // Space between price and button
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: "#72634E",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#EB7407",
    borderRadius: 100,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10, // Adjust top and right values to position the icon
    right: 10,
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);
