import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import MenuButton from "@/components/MenuButton";
import Header from "@/components/Header";
import TripPlaner from "@/components/TripPlaner";
import TujuanPopuler from "@/components/TujuanPopuler";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

export default function Beranda() {
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;

  const topSheetTranslateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [-100, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.topSheet,
          {
            transform: [{ translateY: topSheetTranslateY }],
          },
        ]}
      >
        <View style={styles.container}>
          <View style={{ width: "55%" }}>
            <Text style={styles.greeting}>Selamat Sore</Text>
            <Text style={styles.name}>Yusuf</Text>
          </View>
          <View style={{ width: "45%", flexDirection: "row" }}>
            <TouchableOpacity style={styles.iconButton}>
              <SimpleLineIcons name="basket" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="mail" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <AntDesign name="customerservice" size={24} color="blue" />
              <Text style={styles.greeting}>Bantuan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <Animated.ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <Header />
        <View style={styles.menuContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalMenu}
          >
            <MenuButton
              onPress={() => router.push("/bookingTicket")}
              title="Antar Kota"
              icon="train-outline"
              color="blue"
              iconColor="#FFFFFF"
            />
            <MenuButton
              title="Lokal"
              icon="train-outline"
              color="orange"
              iconColor="#FFFFFF"
            />
            <MenuButton
              title="Commuter Line"
              icon="subway-outline"
              color="red"
              iconColor="#FFFFFF"
            />
            <MenuButton
              title="LRT"
              icon="subway-outline"
              color="purple"
              iconColor="#FFFFFF"
            />
            <MenuButton
              title="Bandara"
              icon="subway-outline"
              color="purple"
              iconColor="#FFFFFF"
            />
            <MenuButton
              title="Whoosh"
              icon="subway-outline"
              color="red"
              iconColor="#FFFFFF"
            />
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalMenu}
          >
            <MenuButton
              title="Hotel"
              icon="train-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
            <MenuButton
              title="Kartu Multi Trip"
              icon="train-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
            <MenuButton
              title="KAI Logistik"
              icon="subway-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
            <MenuButton
              title="Pulsa"
              icon="subway-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
            <MenuButton
              title="PLN"
              icon="bed-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
            <MenuButton
              title="Jadwal Solat"
              icon="bed-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
            <MenuButton
              title="Paket Data"
              icon="bed-outline"
              color="rgba(211, 211, 211, 0.2)"
              iconColor="blue"
            />
          </ScrollView>
        </View>
        <TripPlaner />
        <TujuanPopuler />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    color: "black",
    fontSize: 16,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 8,
    flexDirection: "row",
    gap: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  topSheet: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  topSheetText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  menuContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  horizontalMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
