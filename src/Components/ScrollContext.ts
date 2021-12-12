import { createContext, useContext } from "react";
import { Animated } from "react-native";

export const ScrollContext = createContext<[number, Animated.Value]>([
  0,
  new Animated.Value(0),
]);

export function useScroll() {
  return useContext(ScrollContext);
}
