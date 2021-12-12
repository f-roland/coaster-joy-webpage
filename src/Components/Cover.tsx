import React from "react";
import { Image, ImageStyle, StyleSheet, View } from "react-native";

import { useResponsiveValue } from "../useResponsiveValue";

export function Cover({ image }: { image: string }) {
  const imageStyles: ImageStyle = useResponsiveValue(
    {
      desktop: styles.image,
      mobile: styles.imageMobile,
    },
    1024
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={imageStyles} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    alignItems: "center",
  },
  image: { width: 600, height: 600, borderRadius: 25, marginBottom: 24 },
  imageMobile: { width: 300, height: 300, borderRadius: 25, marginBottom: 24 },
});
