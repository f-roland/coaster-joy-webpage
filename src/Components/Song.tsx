import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Cover } from "./Cover";

import Theme from "../Theme";
import { SongSelector } from "./SongSelector";
import { useResponsiveValue } from "../useResponsiveValue";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 48,
    justifyContent: "space-between",
  },
  credits: {
    flexDirection: "column",
    paddingTop: 48,
  },
  h0: {
    ...Theme.text.h0,
    color: Theme.colors.text,
  },
  h1: {
    ...Theme.text.h1,
    color: Theme.colors.text,
  },
  h2: {
    ...Theme.text.h2,
    color: Theme.colors.textLight,
  },
});

export function SongCard({ song }: { song: Song }) {
  const { flexDirection, creditDirection, titleSize } = useResponsiveValue(
    {
      mobile: {
        flexDirection: "column",
        creditDirection: "row",
        titleSize: 48,
      },
      desktop: {
        flexDirection: "row",
        creditDirection: "column",
        titleSize: 72,
      },
    },
    1023
  );

  return (
    <View style={[styles.container, { flexDirection }]}>
      <View
        style={[
          styles.credits,
          { flexDirection: creditDirection, flexWrap: "wrap" },
        ]}
      >
        <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
          <Text style={[styles.h0, { fontSize: titleSize }]}>{song.title}</Text>
          <Text style={styles.h1}>Coaster Joy</Text>
          <Text style={styles.h2}>Matt 🎸 + Fr 🎸 + Louis 🎹 </Text>
        </View>

        <SongSelector />
      </View>
      <Cover image={song.cover} />
    </View>
  );
}
