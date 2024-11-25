import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const destinations = [
    { city: 'Jakarta', image: 'https://assets-a1.kompasiana.com/items/album/2023/07/04/dki-jakarta-64a3f1afe1a16755f62bb802.jpg' },
    { city: 'Bandung', image: 'https://d5vna1c75x8sk.cloudfront.net/wp-content/uploads/2023/07/gedung-sate.jpg' },
    { city: 'Surabaya', image: 'https://images.tokopedia.net/blog-tokopedia-com/uploads/2018/04/wisata-surabaya.jpg' },
    { city: 'Cirebon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXflImG4ZY9mAf-s24ypx1I_VUSFRbA8hzXQ&s' },
    { city: 'Tangerang', image: 'https://www.tangerangkota.go.id/files/berita/33539hut-ke-30-kota-tangerang-ini-hal-yang-membanggakan-sebagai-warganya-33539.jpeg' },
];

export default function TujuanPopuler() {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.title}>Tujuan Populer</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {destinations.map((item, index) => (
                    <View style={styles.card} key={index}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.city}>{item.city}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
        paddingLeft: 20,
        paddingTop: 20,
        color: 'black',
    },
    scrollContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    card: {
        marginRight: 16,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        width: 150,
        height: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
    overlay: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
    },
    city: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
