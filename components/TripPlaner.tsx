import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MenuButton from './MenuButton';

export default function TripPlaner() {
    return (
        <>
            <View style={styles.balanceContainer}>
                <View style={styles.cnt_1}>
                    <FontAwesome6 name="road-circle-check" size={24} color="white" />
                </View>
                <View style={styles.cnt_2}>
                    <Text style={[styles.text, { fontSize: 20, fontWeight: "bold" }]}>Trip Planner</Text>
                    <Text style={[styles.text, { fontSize: 14 }]}>Buat Perencanaan Terbaik Untuk Perjalananmu</Text>
                </View>
                <View style={styles.cnt_3}>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={[styles.text, { fontSize: 14 }]}>Buat</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.text2}>Layanan Tambahan Untuk Perjalanan Kamu</Text>
            </View>
            <View style={styles.menuContainer} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalMenu}>
                    <MenuButton title="RaillFood" icon="fast-food" color="blue" iconColor="#FFFFFF" />
                    <MenuButton title="Taksi" icon="bus" color="orange" iconColor="#FFFFFF" />
                    <MenuButton title="Bus" icon="subway-outline" color="red" iconColor="#FFFFFF" />
                    <MenuButton title="Hotel" icon="home" color="purple" iconColor="#FFFFFF" />
                </ScrollView>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        paddingHorizontal: 16,
        marginTop: 10,
    },
    horizontalMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 26,
    },
    text2: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 20,
        color: 'black',
        fontWeight: "600",
        fontSize: 24,
        width: "80%"
    },
    touch: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 16,
        width: '100%',
        height: 40,
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    text: {
        color: '#fff',
    },
    balanceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        backgroundColor: "#553ACF",
        height: 140,
        borderColor: "#553ACF",
        borderWidth: 1,
        borderRadius: 18,
    },
    cnt_1: {
        width: "25%",
        paddingLeft: 25,
    },
    cnt_2: {
        width: "50%",
        flexDirection: "column",
        justifyContent: "center",
    },
    cnt_3: {
        width: "25%",
        paddingRight: 10
    },
    actionItem: {
        flexDirection: "column",
        alignItems: "center",
    },
    balance: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
});
