import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { H1 } from "dripsy";

import { Link } from "./Link";
import { useScroll } from "./ScrollContext";
import { useLayout } from "./useLayout";
import { View, AnimatePresence } from "moti";
import { Easing } from "react-native-reanimated";
import { useResponsiveValue } from "./useResponsiveValue";

const spotify = require("../assets/spotify.png");
const apple = require("../assets/appleMusic.png");
const youtube = require("../assets/youtube.png");

const links = [
  {
    href:
      "https://open.spotify.com/track/7lTdhm2DJw1ED0tDvHZDln?si=3Z8Ru6OuS4uBg-qJSh-TSg",
    uri: spotify,
  },
  {
    href:
      "https://music.apple.com/fr/album/life-in-a-box/1565811507?i=1565811512&l=en",
    uri: apple,
  },
  { href: "https://youtu.be/hCZyTEvJ_3I", uri: youtube },
];

export function Buttons() {
  const [visible, setVisible] = useState(false);
  const [scrollPosition] = useScroll();
  const [layout, onLayout] = useLayout();

  const screenScrollThreshold = useResponsiveValue({
    desktop: 4,
    mobile: 3,
  });

  useEffect(() => {
    if (scrollPosition > layout.top / screenScrollThreshold && !visible) {
      setVisible(true);
    }
  }, [scrollPosition, layout.top]);

  const buttonBoxStyles = useResponsiveValue(styles);
  const minHeight = useResponsiveValue({ desktop: 500, mobile: 800 });

  return (
    <View style={[styles.container, { minHeight }]} onLayout={onLayout}>
      <H1 sx={{ color: "text" }}>Available on your favourite platform:</H1>
      <AnimatePresence>
        {visible && (
          <View
            style={[styles.buttonsContainer, buttonBoxStyles]}
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "timing",
              easing: Easing.in(Easing.bezier(0.25, 1, 0.25, 1)),
              duration: 600,
            }}
          >
            {links.map((link, index) => (
              <Link key={index} {...link} />
            ))}
          </View>
        )}
      </AnimatePresence>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  buttonsContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 30,
    fontWeight: "bold",
  },
  desktop: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 200,
  },
  mobile: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 24,
  },
});
