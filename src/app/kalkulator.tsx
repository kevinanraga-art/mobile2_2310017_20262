import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Kalkulator() {
  const [angkaPertama, setAngkaPertama] = useState("");
  const [angkaKedua, setAngkaKedua] = useState("");
  const [hasilHitung, setHasilHitung] = useState<string | number | null>(null);

  const hitung = (op: string) => {
    const a = parseFloat(angkaPertama);
    const b = parseFloat(angkaKedua);

    if (isNaN(a) || isNaN(b)) {
      setHasilHitung("Masukkan angka yang valid!");
      return;
    }

    let hasil: number;
    switch (op) {
      case "+":
        hasil = a + b;
        break;
      case "-":
        hasil = a - b;
        break;
      case "x":
        hasil = a * b;
        break;
      case "/":
        if (b === 0) {
          setHasilHitung("Angka pembagi tidak boleh nol!");
          return;
        }
        hasil = a / b;
        break;
      default:
        return;
    }
    setHasilHitung(hasil);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Mini Kalkulator 4 Operasi</Text>

      <Text style={styles.label}>Angka Pertama:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka pertama"
        placeholderTextColor="#94a3b8"
        value={angkaPertama}
        onChangeText={(text: string) => setAngkaPertama(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Angka Kedua:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka kedua"
        placeholderTextColor="#94a3b8"
        value={angkaKedua}
        onChangeText={(text: string) => setAngkaKedua(text)}
        keyboardType="numeric"
      />

      <View style={styles.rowButtons}>
        <Pressable
          style={[styles.buttonOp, styles.btnTambah]}
          onPress={() => hitung("+")}
        >
          <Text style={styles.buttonOpText}>+</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOp, styles.btnKurang]}
          onPress={() => hitung("-")}
        >
          <Text style={styles.buttonOpText}>-</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOp, styles.btnKali]}
          onPress={() => hitung("x")}
        >
          <Text style={styles.buttonOpText}>×</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOp, styles.btnBagi]}
          onPress={() => hitung("/")}
        >
          <Text style={styles.buttonOpText}>÷</Text>
        </Pressable>
      </View>

      <View style={styles.cardResult}>
        <Text style={styles.cardResultTitle}>Hasil Perhitungan:</Text>
        <Text style={styles.cardResultText}>
          {hasilHitung !== null ? hasilHitung : "Tekan tombol operasi"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 10, paddingHorizontal: 8 },
  sectionTitle: {
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: "#0f172a",
    height: 48,
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 6,
  },
  buttonOp: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTambah: { backgroundColor: "#22c55e" }, // Hijau
  btnKurang: { backgroundColor: "#f59e0b" }, // Kuning/Oranye
  btnKali: { backgroundColor: "#3b82f6" }, // Biru
  btnBagi: { backgroundColor: "#8b5cf6" }, // Ungu
  buttonOpText: { color: "#ffffff", fontWeight: "bold", fontSize: 20 },
  cardResult: {
    marginTop: 24,
    backgroundColor: "#fef3c7",
    borderWidth: 1,
    borderColor: "#fde68a",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    fontSize: 18,
  },
  cardResultTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#92400e",
    marginBottom: 8,
  },
  cardResultText: { fontSize: 24, fontWeight: "bold", color: "#0f172a" },
});
