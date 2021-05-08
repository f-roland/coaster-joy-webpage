import React from "react";
import { Animated, StyleSheet, useWindowDimensions } from "react-native";

const logo = require("../assets/logo.png");
const cover = require("../assets/poster_full.png");

type Props = {
  scrollPosition: Animated.Value;
};

const interpolateProps = (outputRange: number[]) => ({
  inputRange: [0, 150, 200],
  outputRange,
  extrapolate: "clamp" as Animated.ExtrapolateType,
});

export function Header({ scrollPosition }: Props) {
  const { width } = useWindowDimensions();
  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 200],
    outputRange: [900, 200],
    extrapolate: "clamp",
  });

  const logoOpacity = scrollPosition.interpolate(interpolateProps([0, 0, 1]));

  const logoPosition = scrollPosition.interpolate(
    interpolateProps([100, 100, 0])
  );

  const coverOpacity = scrollPosition.interpolate(interpolateProps([1, 1, 0]));

  const coverPosition = scrollPosition.interpolate(
    interpolateProps([0, 0, -100])
  );

  return (
    <Animated.View
      style={[styles.container, { maxWidth: width }, { height: headerHeight }]}
      pointerEvents="none"
    >
      <Animated.Image
        source={{ uri: logo }}
        style={[
          styles.image,
          { maxWidth: width },
          { opacity: logoOpacity, transform: [{ translateY: logoPosition }] },
        ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={{ uri: cover }}
        style={[
          styles.cover,
          { maxWidth: width - 48 },
          {
            opacity: coverOpacity,
            transform: [{ translateY: coverPosition, scale: coverOpacity }],
          },
        ]}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
    position: "absolute",
    top: 0,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 600,
    height: 209,
  },
  cover: {
    width: 600,
    height: 600,
    borderRadius: 25,
  },
});
