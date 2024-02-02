// import { Dimensions } from "react-native";

import { DimensionValue } from "react-native";

// const modelDeviceWidth =

// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;

// function scaledWidth({value: number, modelValue: number}) {
//     return value * 100 /
// }

/**
 * All parameters are in pixels, and percentages for a component's dimensions always work relative to the parent's dimensions.
 * Dimensions should always be same-axis based. (Eg: Width must correspond to Width, and so on)
 *
 * @param numerator Generally the dimension of the element you are trying to style
 * @param denominator Generally the dimension of the element you are placing the current element in.
 *
 * @returns
 */
export function getDimPercentage(
  numerator: number,
  denominator: number
): DimensionValue {
  return `${(numerator * 100) / denominator}%`;
}
