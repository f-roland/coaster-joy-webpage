import { useWindowDimensions } from "react-native";

type Props = {
  desktop: any;
  mobile: any;
};

export function useResponsiveValue({ desktop, mobile }: Props) {
  const { width } = useWindowDimensions();

  return width > 768 ? desktop : mobile;
}
