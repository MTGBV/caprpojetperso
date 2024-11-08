import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const MesInformations = () => {
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');

  // Charger les informations sauvegardées lors du montage du composant
  useEffect(() => {
    const loadInformation = async () => {
      try {
        const savedAge = await SecureStore.getItemAsync('userAge');
        const savedCity = await SecureStore.getItemAsync('userCity');
        const savedMedicalInfo = await SecureStore.getItemAsync('userMedicalInfo');

        console.log("Données chargées :", { savedAge, savedCity, savedMedicalInfo }); // Log pour le débogage

        if (savedAge) setAge(savedAge);
        if (savedCity) setCity(savedCity);
        if (savedMedicalInfo) setMedicalInfo(savedMedicalInfo);
      } catch (error) {
        console.error('Erreur lors du chargement des informations :', error);
      }
    };

    loadInformation();
  }, []);

  // Fonction pour sauvegarder les informations
  const saveInformation = async () => {
    try {
      console.log("Sauvegarde en cours...", { age, city, medicalInfo }); // Log pour le débogage
      await SecureStore.setItemAsync('userAge', age);
      await SecureStore.setItemAsync('userCity', city);
      await SecureStore.setItemAsync('userMedicalInfo', medicalInfo);
      console.log("Informations sauvegardées !");
      Alert.alert('Succès', 'Vos informations ont été sauvegardées.');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des informations :', error);
      Alert.alert('Erreur', 'Impossible de sauvegarder les informations.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Âge</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Entrez votre âge"
        placeholderTextColor="#888888"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Ville de résidence</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Entrez votre ville de résidence"
        placeholderTextColor="#888888"
      />

      <Text style={styles.label}>Informations médicales</Text>
      <TextInput
        style={styles.input}
        value={medicalInfo}
        onChangeText={setMedicalInfo}
        placeholder="Indiquez si vous avez des maladies graves ou blessures"
        placeholderTextColor="#888888"
      />

      <Button title="Sauvegarder" onPress={saveInformation} />
    </View>
  );
};

export default MesInformations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },
  label: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
