import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MenuButton from "@/components/MenuButton";
import { Ionicons } from "@expo/vector-icons";

const trainData = [
  { id: "1", name: "GAJAYANA (56)", time: "19:17", price: "Rp 610.000/pax" },
  {
    id: "2",
    name: "GAJAYANA LUXURY (56L)",
    time: "19:17",
    price: "Rp 1.525.000/pax",
  },
  {
    id: "3",
    name: "SENJA UTAMA YK (140A)",
    time: "19:33",
    price: "Rp 280.000/pax",
  },
];

export default function TrainSelectionPage() {
  const renderTrainItem = ({
    item,
  }: {
    item: { id: string; name: string; time: string; price: string };
  }) => (
    <View style={styles.trainItem}>
      <View style={styles.headerCard}>
        <Text style={styles.trainName}>{item.name}</Text>
        <Text
          style={styles.trainDetails}
        >{`${item.time} - ${item.price}`}</Text>
      </View>
      <View style={styles.displayTrain}>
        <View style={styles.wrapperAddress}>
          <View style={styles.icons}>
            <Ionicons name="train" size={24} color="#3869f9" />
            <Ionicons name="location" size={24} color="#3869f9" />
          </View>
          <View style={styles.originDestination}>
            <Text>Bekasi</Text>
            <Text>
              06j 09m <Text style={styles.estimateDay}>1 Hari</Text>
            </Text>
            <Text>Yogyakarta</Text>
          </View>
        </View>
        <View style={styles.toogleOpenClass}>
          <Text>Tutup</Text>
        </View>
      </View>
      <View style={styles.classTrain}>
        <View style={styles.wrapperAddress}></View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pilih Kereta Berangkat</Text>
      <FlatList
        data={trainData}
        renderItem={renderTrainItem}
        keyExtractor={(item) => item.id}
      />
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
  headerCard: {
    width: "auto",
    flexDirection: "row",
  },
  trainItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  trainName: {
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
  },
  trainDetails: {
    width: "50%",
    fontSize: 14,
    color: "#555",
  },
  displayTrain: {
    maxWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  wrapperAddress: {
    flexDirection: "row",
  },
  icons: {},
  originDestination: {},
  estimateDay: {
    padding: 15,
    borderRadius: 10,
    color: "#e77525",
    backgroundColor: "#fde3ce",
  },
  toogleOpenClass: {},
  classTrain: {},
});
