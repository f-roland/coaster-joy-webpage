import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Link } from "./Link";
import { storeIcon } from "../Stores";
import { useResponsiveValue } from "../useResponsiveValue";
import Theme from "../Theme";
import { useSelectedSong } from "../SelectedSong";

export function Buttons({ links }: { links: SongLink[] }) {
  const { flexDirection, justifyContent } = useResponsiveValue({
    mobile: { flexDirection: "column", justifyContent: "center" },
    desktop: { flexDirection: "row", justifyContent: "space-around" },
  });

  const { selectedSong } = useSelectedSong();

  const paddingHorizontal = useResponsiveValue({
    mobile: 12,
    desktop: 96,
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { paddingHorizontal }]}>
        "{selectedSong.title}" on your favourite platform
      </Text>
      <View
        style={[styles.buttonsContainer, { flexDirection, justifyContent }]}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.url} uri={storeIcon(link.store)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 1,
  },
  title: {
    ...Theme.text.h1,
    color: Theme.colors.text,
    fontWeight: "bold",
    textAlign: "center",
  },
  desktop: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 200,
  },
  mobile: {
    flex: 1,
    alignItems: "center",
  },
});
