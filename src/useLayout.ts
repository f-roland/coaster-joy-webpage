import { ComponentProps, useState } from "react";
import { View } from "react-native";

export function useLayout() {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
    top: 0,
  });
  const onLayout: ComponentProps<typeof View>["onLayout"] = ({
    nativeEvent,
  }) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
}
