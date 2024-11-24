import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import MenuButton from '@/components/MenuButton';
import Header from '@/components/Header';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <MenuButton title="Antar Kota" icon="train-outline" />
          <MenuButton title="Lokal" icon="train-outline" />
          <MenuButton title="Commuter Line" icon="subway-outline" />
          <MenuButton title="LRT" icon="subway-outline" />
        </View>
        <View style={styles.menuRow}>
          <MenuButton title="Hotel" icon="bed-outline" />
          <MenuButton title="Pulsa" icon="phone-portrait-outline" />
          <MenuButton title="PLN" icon="flash-outline" />
        </View>
      </View>
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
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
