import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleBeranda = () => {
        if (email && password !== "") {
            router.push('/(tabs)/beranda');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <Image
                    source={require('../assets/images/KAILOGO.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.input1}
                    placeholder="Email"
                    placeholderTextColor="#A9A9A9"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input2}
                    placeholder="Password"
                    placeholderTextColor="#A9A9A9"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={handleBeranda}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 60,
        backgroundColor: 'white',
        borderColor: "#6C1D9D",
        borderWidth: 1,
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
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: -40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6C1D9D',
    },
    balanceContainer: {
        flexDirection: "column",
        alignItems: 'center',
        width: "80%",
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#FFFFFF",
        height: 450,
        borderColor: "#D3D3D3",
        borderWidth: 1,
        borderRadius: 18,
        paddingTop: 20,
    },
    input1: {
        width: '80%',
        height: 50,
        backgroundColor: '#F3F3F3',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
        marginTop: -20
    },
    input2: {
        width: '80%',
        height: 50,
        backgroundColor: '#F3F3F3',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
    },
});
