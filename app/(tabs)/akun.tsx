import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Akun() {
  const router = useRouter();
  return (
    <View>
      <Text>About Page</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
