import { useMahasiswa } from "@/context/MahasiswaContext";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function InputMahasiswaScreen() {
  const { tambahMahasiswa } = useMahasiswa();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  // Tantangan 2: state untuk pilihan status mahasiswa
  const [status, setStatus] = useState<"Aktif" | "Cuti">("Aktif");

  const handleSimpan = () => {
    if (!nim.trim() || !nama.trim()) {
      Alert.alert("Validasi Gagal", "NIM dan Nama Lengkap mahasiswa wajib diisi!");
      return;
    }

    try {
      // Tantangan 1: tambahMahasiswa akan throw Error jika NIM duplikat
      tambahMahasiswa({
        nim: nim.trim(),
        nama: nama.trim(),
        prodi: prodi.trim() || "Teknik Informatika",
        status: status, // Tantangan 2: gunakan status yang dipilih
      });

      Alert.alert(
        "Sukses Tersimpan! 🎉",
        `Mahasiswa baru atas nama ${nama} (${nim}) telah terdaftar di database lokal.`
      );

      // Reset formulir setelah disimpan
      setNim("");
      setNama("");
      setProdi("");
      setStatus("Aktif");
    } catch (error: any) {
      // Tantangan 1: Tangkap error NIM duplikat dari Context
      Alert.alert("Gagal", error.message ?? "Terjadi kesalahan saat menyimpan.");
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Formulir Pendaftaran Mahasiswa</Text>
      <Text style={styles.subtitle}>
        Data yang diinputkan di sini akan langsung tampil otomatis di tab Data dan Report!
      </Text>

      {/* Field NIM */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor Induk Mahasiswa (NIM)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 230101006"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />
      </View>

      {/* Field Nama */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nama Lengkap Mahasiswa</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Muhammad Rizki"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      {/* Field Prodi */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Program Studi</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Teknik Informatika / Sistem Informasi"
          placeholderTextColor="#94a3b8"
          value={prodi}
          onChangeText={setProdi}
        />
      </View>

      {/* Tantangan 2: Pilihan Status Mahasiswa */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Status Mahasiswa</Text>
        <View style={styles.radioRow}>
          <TouchableOpacity
            style={[styles.radioBtn, status === "Aktif" && styles.radioBtnSelected]}
            onPress={() => setStatus("Aktif")}
            activeOpacity={0.8}
          >
            <View style={styles.radioCircle}>
              {status === "Aktif" && <View style={styles.radioInner} />}
            </View>
            <Text style={[styles.radioLabel, status === "Aktif" && styles.radioLabelSelected]}>
              Aktif
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.radioBtn, status === "Cuti" && styles.radioBtnCuti]}
            onPress={() => setStatus("Cuti")}
            activeOpacity={0.8}
          >
            <View style={[styles.radioCircle, status === "Cuti" && styles.radioCircleCuti]}>
              {status === "Cuti" && <View style={styles.radioInnerCuti} />}
            </View>
            <Text style={[styles.radioLabel, status === "Cuti" && styles.radioLabelCuti]}>
              Cuti
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSimpan} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Simpan Data Mahasiswa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  content: { padding: 18 },
  title: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitle: { fontSize: 12, color: "#64748b", marginTop: 4, marginBottom: 18 },
  formGroup: { marginBottom: 14 },
  label: { fontSize: 12.5, fontWeight: "600", color: "#334155", marginBottom: 6 },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: "#0f172a",
  },
  // Tantangan 2: style radio button
  radioRow: {
    flexDirection: "row",
    gap: 12,
  },
  radioBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flex: 1,
  },
  radioBtnSelected: {
    borderColor: "#072deb",
    backgroundColor: "#eff6ff",
  },
  radioBtnCuti: {
    borderColor: "#dc2626",
    backgroundColor: "#fff5f5",
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#cbd5e1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  radioCircleCuti: {
    borderColor: "#dc2626",
  },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: "#072deb",
  },
  radioInnerCuti: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: "#dc2626",
  },
  radioLabel: {
    fontSize: 13,
    color: "#64748b",
    fontWeight: "600",
  },
  radioLabelSelected: {
    color: "#072deb",
  },
  radioLabelCuti: {
    color: "#dc2626",
  },
  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#ffffff", fontSize: 13.5, fontWeight: "bold" },
});
