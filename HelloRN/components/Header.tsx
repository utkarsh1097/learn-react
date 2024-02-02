import { Image, StyleSheet, View } from "react-native";

import * as rp from "react-native-responsive-screen";
import { getDimPercentage } from "./Utils";

const LogoImage = require("../assets/HomePage/logo.png");
// const ProfileImage = require("../assets/HomePage/user.png");

function Header() {
  return (
    <View style={styles.view}>
      {/* <View style={{ height: 50 }}> */}
      <Image style={styles.icon} source={LogoImage}></Image>

      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: "10.3%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(202,202,202,0.5)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: getDimPercentage(50, 1280),
    height: getDimPercentage(50, 85),
    resizeMode: "contain",
  },
  profileButton: {
    height: "87.06%",
    width: "20.04%",
    flexDirection: "row",
  },
  profileImage: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
});

export default Header;
