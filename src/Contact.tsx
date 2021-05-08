import React from "react";
import { View, StyleSheet } from "react-native";
import { A, P, H2 } from "@expo/html-elements";

export function Contact() {
  return (
    <View style={styles.container}>
      <A href="mailto:hello@coasterjoy.com">
        <P style={styles.mail}>Drop us a line</P>
      </A>
      <P style={styles.copyright}> &copy; Coaster Joy 2021</P>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 24,
  },
  copyright: {
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  mail: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    textDecorationLine: "underline",
    fontSize: 18,
  },
});
