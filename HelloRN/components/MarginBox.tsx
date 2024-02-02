import { DimensionValue, View } from "react-native";

function VerticalMarginBox({ length }: { length: DimensionValue }) {
  return <View style={{ height: length }}></View>;
}

function HorizontalMarginBox({ length }: { length: number }) {
  return <View style={{ width: length }}></View>;
}

export { VerticalMarginBox, HorizontalMarginBox };
