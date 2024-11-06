import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MesInformations = () => {
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [healthInfo, setHealthInfo] = useState('');

    const handleSave = () => {
        // Logique de sauvegarde (envoi vers une base de données ou API)
        console.log('Informations sauvegardées', { age, city, healthInfo });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes Informations</Text>

            <Text style={styles.label}>Âge</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Entrez votre âge"
                placeholderTextColor="#888888"
                value={age}
                onChangeText={setAge}
            />

            <Text style={styles.label}>Ville de Résidence</Text>
            <TextInput
                style={styles.input}
                placeholder="Entrez votre ville"
                placeholderTextColor="#888888"
                value={city}
                onChangeText={setCity}
            />

            <Text style={styles.label}>Maladies ou Blessures Graves</Text>
            <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Listez vos maladies ou blessures graves"
                placeholderTextColor="#888888"
                value={healthInfo}
                onChangeText={setHealthInfo}
                multiline
            />

            <Button title="Sauvegarder" onPress={handleSave} color="#00A8E8" />
        </View>
    );
};

export default MesInformations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        marginBottom: 20,
    },
    label: {
        color: '#FFFFFF',
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#1A1A1A',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1,
        marginBottom: 15,
    },
});
