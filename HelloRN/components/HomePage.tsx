import { Text, View } from "react-native";
import Header from "./Header";
import { VerticalMarginBox } from "./MarginBox";
import { getDimPercentage } from "./Utils";

function HomePage() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <VerticalMarginBox length={getDimPercentage(137, 832)} />
      <Text style={{ alignSelf: "center", fontSize: 20 }}> Sign In</Text>
    </View>
  );
}

export default HomePage;
