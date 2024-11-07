import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import ProfilTouch from '@/components/ProfilTouch';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../.expo/types/navigationTypes'; // Importez le type que vous avez défini

const Profil = () => {
    // Utilisez NavigationProp avec RootStackParamList pour typer navigation
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <ScrollView style={styles.scrollView}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.area}>
                    <ThemedText type="title" style={styles.text}>Profil</ThemedText>

                    {/* Profile Header */}
                    <View style={styles.profileHeader}>
                        <Image source={require('../../assets/images/favicon.png')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <ThemedText type="subtitle" style={styles.whiteText}>Marie André</ThemedText>
                            <ThemedText style={styles.subText}>Rougon</ThemedText>
                        </View>
                    </View>

                    {/* Sections */}
                    <View style={styles.sectionContainer}>
                        <ThemedText type='subtitle' style={styles.sectionTitle}>Mon Compte</ThemedText>
                        <ProfilTouch title='Paramètres du Compte' icon="person-outline" onPress={() => navigation.navigate('screensProfil/parametres')} />
                    </View>

                    <View style={styles.sectionContainer}>
                        <ThemedText type='subtitle' style={styles.sectionTitle}>Paramètres</ThemedText>
                        <ProfilTouch title='Sécurité' icon="lock-closed-outline" />
                        <ProfilTouch title='Notifications' icon="notifications-outline" />
                    </View>

                    <View style={styles.sectionContainer}>
                        <ThemedText type='subtitle' style={styles.sectionTitle}>Espace d'Information</ThemedText>
                        <ProfilTouch title='Mes Informations' icon="information-circle-outline" onPress={() => navigation.navigate('screensProfil/mesInformations')} />
                    </View>

                    <View style={styles.sectionContainer}>
                        <ThemedText type='subtitle' style={styles.sectionTitle}>Historique</ThemedText>
                        <ProfilTouch title='Historique des Alertes' icon="time-outline" />
                    </View>

                    <View style={styles.sectionContainer}>
                        <ThemedText type='subtitle' style={styles.sectionTitle}>Paramètres de Notification</ThemedText>
                        <ProfilTouch title='Personnaliser les Alertes' icon="settings-outline" />
                    </View>

                    <View style={styles.sectionContainer}>
                        <ThemedText type='subtitle' style={styles.sectionTitle}>Contact d'Urgence</ThemedText>
                        <ProfilTouch title='Enregistrer un Contact' icon="call-outline" />
                    </View>

                    <TouchableOpacity style={styles.logoutButton}>
                        <Icon name="exit-outline" size={20} color="#FFFFFF" />
                        <ThemedText type="default" style={styles.logoutText}>Déconnexion</ThemedText>
                    </TouchableOpacity>

                    <ThemedText type='default' style={styles.footerText}>by Les Extincteurs</ThemedText>
                </SafeAreaView>
            </SafeAreaProvider>
        </ScrollView>
    );
}

export default Profil;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#000000', // Fond noir pour toute la ScrollView
    },
    area: {
        flex: 1,
        margin: 20,
        backgroundColor: '#000000', // Fond noir pour la SafeAreaView
    },
    text: {
        color: '#FFFFFF',
        marginVertical: 20,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#1A1A1A',
        borderRadius: 10,
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: 'center',
    },
    subText: {
        color: '#AAAAAA', // Texte secondaire pour un bon contraste
    },
    sectionContainer: {
        backgroundColor: '#121212', // Fond noir pour les sections
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderColor: '#333333', // Bordure pour donner de la structure
        borderWidth: 1,
    },
    sectionTitle: {
        color: '#FFFFFF', // Couleur principale
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3B30',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    logoutText: {
        color: '#FFFFFF',
        marginLeft: 8,
    },
    footerText: {
        color: '#AAAAAA',
        textAlign: 'center',
        marginTop: 25,
    },
    whiteText: {
        color: '#FFFFFF',
    },
});
