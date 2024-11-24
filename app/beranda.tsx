import { View, StyleSheet, ScrollView } from 'react-native';
import MenuButton from '@/components/MenuButton';
import Header from '@/components/Header';
import TripPlaner from '@/components/TripPlaner';

export default function Beranda() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.menuContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalMenu}>
          <MenuButton title="Antar Kota" icon="train-outline" color="blue" iconColor="#FFFFFF" />
          <MenuButton title="Lokal" icon="train-outline" color="orange" iconColor="#FFFFFF" />
          <MenuButton title="Commuter Line" icon="subway-outline" color="red" iconColor="#FFFFFF" />
          <MenuButton title="LRT" icon="subway-outline" color="purple" iconColor="#FFFFFF" />
          <MenuButton title="Bandara" icon="subway-outline" color="purple" iconColor="#FFFFFF" />
          <MenuButton title="Whoosh" icon="subway-outline" color="red" iconColor="#FFFFFF" />
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalMenu}>
          <MenuButton title="Hotel" icon="train-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
          <MenuButton title="Kartu Multi Trip" icon="train-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
          <MenuButton title="KAI Logistik" icon="subway-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
          <MenuButton title="Pulsa" icon="subway-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
          <MenuButton title="PLN" icon="bed-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
          <MenuButton title="Jadwal Solat" icon="bed-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
          <MenuButton title="Paket Data" icon="bed-outline" color="rgba(211, 211, 211, 0.2)" iconColor="blue" />
        </ScrollView>
      </View>
      <TripPlaner />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  horizontalMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
