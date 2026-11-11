import { StyleSheet, View } from "react-native";

export default function Hello() {
  return (
    <View style={gaya.utama}>
      <View style={gaya.container}>
        {/*<Text style={gaya.text}>Hello, World!</Text>*/}
        <View style={gaya.kotak}></View>
        <View style={gaya.kotak}></View>
        <View style={gaya.kotak}></View>
        <View style={gaya.kotak}></View>
      </View>
      <View style={gaya.container}>
        {/*<Text style={gaya.text}>Hello, World!</Text>*/}
        <View style={gaya.kotak}></View>
        <View style={gaya.kotak}></View>
        <View style={gaya.kotak}></View>
        <View style={gaya.kotak}></View>
      </View>
    </View>
  );
}

const gaya = StyleSheet.create({
  utama: {
    flex: 1,
    backgroundColor: "#0c8042",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#0c8042",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  font: {
    fontSize: 50,
  },
  kotak: {
    width: 50,
    height: 50,
    backgroundColor: "lightgray",
    marginHorizontal: 10,
  },
});
