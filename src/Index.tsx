import React, { useRef, useState } from "react";
import { View, Animated, StyleSheet, useWindowDimensions } from "react-native";
import { DripsyProvider } from "dripsy";
import { Buttons } from "./Buttons";
import { Cover } from "./Cover";

import { Header } from "./Header";
import { ScrollContainer } from "./ScrollContainer";
import { ScrollContext } from "./ScrollContext";
import theme from "./Theme";

export default function HelloWorld() {
  const { height } = useWindowDimensions();
  const scrollPosition = useRef<Animated.Value>(new Animated.Value(0)).current;
  const [scrollY, setScrollY] = useState<number>(0);

  scrollPosition.addListener(({ value }) => setScrollY(value));

  return (
    <DripsyProvider theme={theme}>
      <ScrollContext.Provider value={[scrollY, scrollPosition]}>
        <ScrollContainer
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollPosition } } },
          ])}
        >
          <View
            style={{
              minHeight: height,
            }}
          >
            <Cover />
            <Buttons />
          </View>
        </ScrollContainer>
      </ScrollContext.Provider>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 900,
    width: 900,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    paddingVertical: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
  image: {
    width: 900,
    height: 900,
  },
});
