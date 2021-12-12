import { useWindowDimensions } from "react-native";

type Props = {
  desktop: any;
  mobile: any;
};

export function useResponsiveValue(
  { desktop, mobile }: Props,
  threshold = 768
) {
  const { width } = useWindowDimensions();

  return width > threshold ? desktop : mobile;
}
