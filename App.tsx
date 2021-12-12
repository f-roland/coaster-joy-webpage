/// <reference types="." />
import React from "react";
import { StyleSheet, View } from "react-native";

import Home from "./src";
import { SelectedSongProvider } from "./src/SelectedSong";

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <SelectedSongProvider>
          <Home />
        </SelectedSongProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(236, 236, 236, 0.7)",
    minWidth: "100vw",
    minHeight: "100vh",
  },
  container: { flex: 1 },
});
