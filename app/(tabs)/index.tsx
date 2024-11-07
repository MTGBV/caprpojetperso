import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Section: Liens vers des cours et leçons */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Cours et Leçons de Sensibilisation</Text>
                <TouchableOpacity style={styles.card}>
                    <Ionicons name="school-outline" size={24} color="#FFFFFF" />
                    <Text style={styles.cardText}>Prévention des Feux de Forêt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Ionicons name="alert-circle-outline" size={24} color="#FFFFFF" />
                    <Text style={styles.cardText}>Plans d'Évacuation et Sécurité</Text>
                </TouchableOpacity>
            </View>

            {/* Section: Actualités sur les feux récents */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dernières Actualités</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newsCarousel}>
                    <View style={styles.newsItem}>
                        <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.newsImage} />
                        <Text style={styles.newsText}>Incendie majeur à Ivry sur Seine</Text>
                    </View>
                    <View style={styles.newsItem}>
                        <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.newsImage} />
                        <Text style={styles.newsText}>Évacuations en cours à Vésale</Text>
                    </View>
                </ScrollView>
            </View>

            {/* Section: Conseil du jour */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Conseil du Jour</Text>
                <Text style={styles.tipText}>Pensez à élaguer les arbres autour de votre maison pour réduire les risques de propagation de feu.</Text>
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Fond noir pour le thème sombre
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardText: {
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 16,
    },
    newsCarousel: {
        flexDirection: 'row',
    },
    newsItem: {
        width: 200,
        marginRight: 10,
    },
    newsImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    newsText: {
        color: '#FFFFFF',
        marginTop: 5,
        fontSize: 14,
    },
    tipText: {
        color: '#AAAAAA',
        fontSize: 16,
        backgroundColor: '#1A1A1A',
        padding: 15,
        borderRadius: 10,
    },
});
