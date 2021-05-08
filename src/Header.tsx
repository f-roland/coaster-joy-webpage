import React from "react";
import { View, Image, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: require("../assets/logo.png") }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "lightgray",
    alignItems: "center",
  },
  image: { width: 600, height: 100 },
});
