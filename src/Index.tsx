import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { DripsyProvider } from "dripsy";

import theme from "./Theme";
import { Loader } from "./Components/Loader";
import { useSelectedSong } from "./SelectedSong";
import { Buttons } from "./Components/Buttons";
import { Footer } from "./Components/Footer";
import { useResponsiveValue } from "./useResponsiveValue";
import { SongCard } from "./Components/Song";

export default function Home() {
  const { width, height } = useWindowDimensions();

  const maxWidth = useResponsiveValue({
    mobile: width,
    desktop: 1440,
  });

  const { selectedSong } = useSelectedSong();

  const { paddingTop, paddingHorizontal } = useResponsiveValue({
    mobile: { paddingTop: 24, paddingHorizontal: 12 },
    desktop: { paddingTop: 48, paddingHorizontal: 96 },
  });

  return (
    <DripsyProvider theme={theme}>
      <View style={styles.app}>
        {/* @ts-ignore */}
        <Loader>
          <View style={[styles.container, { maxWidth, width }]}>
            <SongCard song={selectedSong} />
            <Buttons links={selectedSong.links} />
          </View>
          <Footer />
        </Loader>
      </View>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: theme.colors.backgroundColor,
    flex: 1,
    minWidth: "100vw",
    minHeight: "100vh",
  },
  container: {
    flex: 1,
    flexGrow: 1,
    marginHorizontal: "auto",
  },
});
