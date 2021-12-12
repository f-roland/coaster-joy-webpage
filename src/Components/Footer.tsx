import React from "react";
import { StyleSheet, View } from "react-native";
import Theme from "../Theme";
import { Icon, IconTypes } from "./Icon";

const icons = [
  { icon: IconTypes.mail, url: "mailto:hello@coasterjoy.com" },
  {
    icon: IconTypes.facebook,
    url: "https://www.facebook.com/coasterjoytheband",
  },
  { icon: IconTypes.instagram, url: "https://www.instagram.com/coasterjoy" },
];

export function Footer() {
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} {...icon} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    backgroundColor: Theme.colors.darkerBg,
    borderTopWidth: 1,
    borderColor: Theme.colors.nickel,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
