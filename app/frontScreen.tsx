import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function HomeScreen() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNext = () => {
    if (currentMessageIndex < 3) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
      console.log('Sudah di pesan terakhir');
    }
  };

  const renderContent = () => {
    switch (currentMessageIndex) {
      case 0:
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>Pesan Tiket Di Mana Saja</Text>
            <Text style={styles.contentText2}>Dengan Menggunakan Access kamu akan mendapatkan banyak keuntungan, tidak perlu khawatir lagi untuk pesan dan batalkan tiket kereta mu di mana saja.</Text>
            <Image source={require('../assets/images/relaks.png')} style={styles.image} />
          </View>
        );
      case 1:
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>Trip Planner</Text>
            <Text style={styles.contentText2}>Kami akan membuatkan rekomendasi perjalanan terbaik untuk rencana perjalananmu.</Text>
            <Image source={require('../assets/images/trip.png')} style={styles.image} />
          </View>
        );
      case 2:
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>Kelola Tiket Kereta Api Jadi Lebih Mudah</Text>
            <Text style={styles.contentText2}>Sekarang kamu bisa ubah jadwal dan batalkan tiket kereta di mana saja lewat Access tanpa harus ke stasiun.</Text>
            <Image source={require('../assets/images/easy.png')} style={styles.image} />
          </View>
        );
      case 3:
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>E-Boarding Pass</Text>
            <Text style={styles.contentText2}>Sekarang kamu tidak perlu antre di stasiun lagi karena dengan Access, kamu bisa cetak boarding pass mu sendiri</Text>
            <Image source={require('../assets/images/boarding.png')} style={styles.image} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentMessageIndex < 3 ? 'LANJUTKAN' : 'MASUK'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#6C1D9D',
  },
  content: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    marginBottom: 20,
  },
  contentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginHorizontal: 20,
    width: '80%',
    marginBottom: 10,
    marginTop: -100
  },
  contentText2: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
    marginHorizontal: 20,
    lineHeight: 25,
    width: '80%',
    marginBottom: 20, 
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 50
  },
  button: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
