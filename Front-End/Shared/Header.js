import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

export default Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.storeText}>STORE</Text>
      <Text style={styles.reachText}>REACH</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 40,
  },
  storeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EB7407",
  },
  reachText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8D7B68",
  },
});
