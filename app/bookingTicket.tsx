import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TicketBooking() {
  const router = useRouter();
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kereta Antar Kota</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dari</Text>
        <TextInput style={styles.input} placeholder="Dari" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ke</Text>
        <TextInput style={styles.input} placeholder="Ke" />
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.label}>Tanggal pergi</Text>
        <TextInput style={styles.input} placeholder="Sen, 18 Nov 2024" />
        <View style={styles.switchContainer}>
          <Text>Pulang Pergi</Text>
          <Switch value={isRoundTrip} onValueChange={setIsRoundTrip} />
        </View>
      </View>

      <View style={styles.passengerContainer}>
        <Text style={styles.label}>Penumpang</Text>
        <TextInput style={styles.input} placeholder="1 Dewasa" />
        <Text style={styles.infoText}>
          Penumpang bayi tidak mendapatkan kursi sendiri
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/selectTrain");
        }}
      >
        <Text style={styles.buttonText}>CARI TIKET ANTAR KOTA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  dateContainer: {
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  passengerContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 12,
    color: "#999",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
