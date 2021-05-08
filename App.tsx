import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./src";

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100vh",
    backgroundColor: "rgba(236, 236, 236, 0.7)",
  },
  container: { flex: 1 },
});
