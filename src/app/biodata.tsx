import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Biodata() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/biodata.jpeg")}
        style={styles.foto}
      />
      <Text style={styles.nama}>Kevin Anraga</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nama: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
  },
});
