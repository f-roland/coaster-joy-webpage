import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelectedSong } from "../SelectedSong";
import { Singles } from "../Singles";
import Theme from "../Theme";
import { useResponsiveValue } from "../useResponsiveValue";

export function SongSelector() {
  const { selectedSong, setSelectedSong } = useSelectedSong();

  const otherSongs = useMemo(() => {
    return Singles.filter(({ title }) => title !== selectedSong.title);
  }, [selectedSong.title]);

  const { alignItems, justifyContent } = useResponsiveValue(
    {
      mobile: { alignItems: "flex-end", justifyContent: "flex-end" },
      desktop: { alignItems: "flex-start", justifyContent: "flex-start" },
    },
    1023
  );

  return (
    <View style={[styles.container, { alignItems, justifyContent }]}>
      <Text style={styles.h1}>Our other songs:</Text>
      {otherSongs.map((song, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedSong(song)}>
          <Text style={[styles.h1, { fontWeight: "800" }]}>{song.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 72,
    flexDirection: "column",
    flexGrow: 1,
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
