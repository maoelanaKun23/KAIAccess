import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Selamat Sore</Text>
      <Text style={styles.name}>EDY</Text>
      <View style={styles.balanceContainer}>
        {/* <Image source={require('../assets/kai_logo.png')} style={styles.logo} /> */}
        <Text style={styles.balance}>Rp 0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#6C1D9D',
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  balance: {
    color: '#fff',
    fontSize: 16,
  },
});
