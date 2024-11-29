import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IMenuButton {
  title: string;
  icon: string;
  color: string;
  iconColor: string;
  onPress?: () => void;
}

export default function MenuButton({
  title,
  icon,
  color,
  iconColor,
  onPress,
}: IMenuButton) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 140,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
});
