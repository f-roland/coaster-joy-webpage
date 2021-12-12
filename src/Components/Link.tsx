import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { A } from "@expo/html-elements";

type Props = {
  href: string;
  uri: string;
};

export function Link({ href, uri }: Props) {
  return (
    // @ts-ignore
    <A href={href} target="_blank">
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.image} resizeMode="contain" />
      </View>
    </A>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  image: {
    width: 200,
    height: 100,
  },
});
