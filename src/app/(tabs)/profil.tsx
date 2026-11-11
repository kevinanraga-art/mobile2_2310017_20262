import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/biodata.jpeg")}
        style={styles.foto}
      />
      <Text style={styles.title}>Profil Pengguna</Text>
      <Text style={styles.name}>Kevin Anraga</Text>
      <Text style={styles.nim}>NIM: 2310017 | Sistem Informasi</Text>
      <Text style={styles.subtitle}>Informasi data akun dan pengaturan pribadi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#0f172a" },
  name: { fontSize: 16, fontWeight: "600", color: "#072deb", marginTop: 4 },
  nim: { fontSize: 13, color: "#475569", marginTop: 2 },
  subtitle: { fontSize: 13, color: "#64748b", marginTop: 8, textAlign: "center" },
});
