import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Carte = () => {
    return (
        <View style={styles.container}>
            {/* Icône de travaux */}
            <Ionicons name="construct-outline" size={80} color="#FFA500" style={styles.icon} />

            {/* Message indiquant que la fonctionnalité est en développement */}
            <Text style={styles.title}>Fonctionnalité en cours de développement</Text>
            <Text style={styles.subtitle}>La carte arrivera dans une prochaine mise à jour !</Text>
        </View>
    );
};

export default Carte;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000', // Fond noir pour correspondre au thème
        padding: 20,
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#AAAAAA',
        textAlign: 'center',
    },
});
