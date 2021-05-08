import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { View, AnimatePresence } from "moti";
import { Easing } from "react-native-reanimated";
import { useResponsiveValue } from "./useResponsiveValue";

export function Cover() {
  const imageStyles: ImageStyle = useResponsiveValue({
    desktop: styles.image,
    mobile: styles.imageMobile,
  });

  return (
    <AnimatePresence>
      <View
        from={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        style={styles.container}
        transition={{
          duration: 600,
          type: "timing",
          easing: Easing.in(Easing.bezier(0.25, 0.1, 0.25, 1.0)),
        }}
      >
        <Image
          source={{ uri: require("../assets/poster_full.png") }}
          style={imageStyles}
          resizeMode="contain"
        />

        <Image
          source={{ uri: require("../assets/title.png") }}
          style={styles.title}
          resizeMode="contain"
        />
      </View>
    </AnimatePresence>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    width: "100%",
    alignItems: "center",
  },
  image: { width: 600, height: 600, borderRadius: 25, marginBottom: 24 },
  imageMobile: { width: 300, height: 300, borderRadius: 25, marginBottom: 24 },
  title: {
    width: 300,
    height: 150,
  },
});
