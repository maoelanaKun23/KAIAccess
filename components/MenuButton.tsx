import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuButton({ title, icon }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name={icon} size={24} color="#007AFF" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});
