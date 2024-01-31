import { View, Text, StyleSheet } from "react-native";

function Landing() {
    return <View style={style.landing} >
        <Text style={{ fontSize: 30, fontWeight: "bold",}}>Hello World</Text>
    </View>;
}


const style = StyleSheet.create({
    "landing" : {
        backgroundColor: "white", 
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Landing;