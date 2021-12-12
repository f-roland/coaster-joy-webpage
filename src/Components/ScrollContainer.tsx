import React, { ReactChild } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";

type Props = {
  children: ReactChild;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

export function ScrollContainer({ children, onScroll }: Props) {
  return (
    <ScrollView
      nativeID="scroll-container"
      onScroll={onScroll}
      scrollEventThrottle={32}
    >
      {children}
    </ScrollView>
  );
}
