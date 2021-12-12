import React from "react";
import { StyleSheet } from "react-native";
import { A } from "@expo/html-elements";
import { AntDesign } from "@expo/vector-icons";
import Theme from "../Theme";

export enum IconTypes {
  facebook = "facebook-square",
  mail = "mail",
  instagram = "instagram",
}

type Props = {
  icon: IconTypes;
  url: string;
};

export function Icon({ url, icon }: Props) {
  return (
    // @ts-ignore
    <A href={url} target="_blank" style={styles.link}>
      <AntDesign name={icon} size={32} color={Theme.colors.text} />
    </A>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: 24,
  },
});
