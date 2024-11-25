import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <Image
                    source={require('../assets/images/KAILOGO.png')}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.button}>
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
    },
});
