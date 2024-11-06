import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Parametres = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paramètres de Sécurité</Text>
            {/* Vous pouvez ajouter des options ici */}
            <Text style={styles.text}>Réglez vos paramètres de sécurité ici.</Text>
        </View>
    );
};

export default Parametres;

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
    text: {
        color: '#FFFFFF',
    },
});
