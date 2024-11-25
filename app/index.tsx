import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function HomeScreen() {
  const router = useRouter();
 
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/frontScreen');
    }, 3000);
 
    return () => clearTimeout(timer);
  }, [router]);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/KAILOGO.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Official Mobile Application</Text>
        <Text style={styles.text}>PT Kereta Api Indonesia (Persero)</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});