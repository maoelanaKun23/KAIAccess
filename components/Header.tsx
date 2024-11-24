import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Header() {
    return (
        <>
            <View style={styles.container}>
                <View style={{ width: "55%" }}>
                    <Text style={styles.greeting}>Selamat Sore</Text>
                    <Text style={styles.name}>Yusuf</Text>
                </View>
                <View style={{ width: "45%", flexDirection: "row" }}>
                    <TouchableOpacity style={styles.iconButton}>
                        <SimpleLineIcons name="basket" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialIcons name="mail" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} >
                        <AntDesign name="customerservice" size={24} color="#fff" />
                        <Text style={styles.greeting}>Bantuan</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.balanceContainer}>
                <View style={{ width: "100%", flexDirection: "row", height: "50%" }}>
                    <View style={styles.cnt_1}>
                        <Text style={[styles.balance, { gap: 10 }]}>
                            <Entypo name="wallet" size={24} color="#6C1D9D" /> KAI PAY
                        </Text>
                        <Text style={styles.balance}>Rp 0 <FontAwesome6 name="greater-than" size={16} color="blue" /></Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.cnt_2}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialCommunityIcons name="line-scan" size={24} color="blue" />
                            <Text style={{ flexDirection: "column" }}>
                                Scan
                            </Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialCommunityIcons name="credit-card-plus" size={24} color="blue" />
                            <Text style={{ flexDirection: "column" }}>
                                Top Up
                            </Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <FontAwesome name="history" size={24} color="blue" />
                            <Text style={{ flexDirection: "column" }}>
                                Riwayat
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.horizontalLine} />
                <View style={{ width: "100%", height: '50%', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", gap: 5, width: "50%", paddingTop: 13, paddingLeft: 25 }}>
                        <MaterialIcons name="stars" size={24} color="#F0D000" />
                        <Text style={[styles.balance, {paddingTop: 2}]}>0 RailPoin
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: "10", width: "50%", paddingTop: 8, paddingLeft: 25 }}>
                        <TouchableOpacity style={{ height: 35, flexDirection: "row", gap: 5, width: "80%", backgroundColor: "rgba(211, 211, 211, 0.2)", alignItems: "center", borderRadius: 16, justifyContent: "center" }}>
                            <MaterialIcons name="workspace-premium" size={24} color="#F0D000" style={{ opacity: 1 }} />
                            <Text style={styles.balance}>Premium
                            </Text>
                            <FontAwesome6 name="greater-than" size={16} color="#F0D000" />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    horizontalLine: {
        height: 1,
        width: '95%',
        backgroundColor: 'gray',
        marginVertical: 8,
        opacity: 0.2
    },
    verticalLine: {
        width: 1,
        opacity: 0.2,
        marginTop: 5,
        height: '80%',
        backgroundColor: 'gray',
        marginHorizontal: 8,
    },
    cnt_1: {
        width: '35%',
        paddingTop: 15,
        paddingLeft: 25,
        gap: 5
    },
    cnt_2: {
        width: '65%',
        flexDirection: "row",
        gap: 20,
        paddingTop: 20,
        paddingLeft: 45,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#6C1D9D',
        height: 220,
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
    iconButton: {
        padding: 8,
        flexDirection: "row",
        gap: 5
    },
    balanceContainer: {
        flexDirection: "column",
        alignItems: 'center',
        marginTop: -80,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#FFFFFF",
        height: 150,
        borderColor: "#D3D3D3",
        borderWidth: 1,
        borderRadius: 18,
    },
    balance: {
        color: '#000',
        fontSize: 16,
        fontWeight: 600
    },
});
