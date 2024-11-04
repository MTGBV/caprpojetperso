import { StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import ProfilTouch from '@/components/ProfilTouch';


const Profil = () => {
    return (  // ligne 17, faire un appel sur la BD ou API pour récupérer les données du nom, pareil pour la 18 pour la localisation
        <ScrollView>
            <SafeAreaProvider>
                <SafeAreaView style={styles.area}>
                    <ThemedText type="title" style={styles.text}>Profil</ThemedText>
                    <View style={styles.firstpanel}>
                        <Image source={require('../../assets/images/favicon.png')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <ThemedText type="subtitle">Marie André</ThemedText> 
                            <ThemedText>Rougon</ThemedText> 
                        </View>
                    </View>
                    <View style={styles.accpanel}>
                        <ThemedText type='subtitle' style={styles.titrepartie}>Mon Compte</ThemedText>
                        <ProfilTouch title='Gérer le profil' />
                        <ProfilTouch title='Sécurité' />
                        <ProfilTouch title='Notifications' />
                        <ProfilTouch title='Confidentialité' />
                    </View>
                    <View style={styles.infopanel}>
                        <ThemedText type='subtitle' style={styles.titrepartie}>Espace Informations</ThemedText>
                        <ProfilTouch title='Mon Compte' />
                        <ProfilTouch title='Mes Informations' />
                        <ProfilTouch title='Les Protocoles' />
                    </View>
                    <View style={styles.lastbutton}>
                        <ProfilTouch title="Déconnexion" icon="exit-outline" type="destructive" />
                    </View>
                    <ThemedText type='default' style={styles.philigramme}>by Les Extincteurs</ThemedText>
                </SafeAreaView>
            </SafeAreaProvider>
        </ScrollView>
    );
}

export default Profil;

const styles = StyleSheet.create({
    area: {
        flex: 1,
        margin: 25,
    },
    scrollViewContent: {

    },
    text: {
        color: '#000000',
        marginVertical: 25,
    },
    firstpanel: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
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
    accpanel: {
        marginVertical: 25,
    },
    infopanel: {
        marginVertical: 25,
    },
    lastbutton: {
        marginTop: 40,
    },
    titrepartie:{
        marginBottom: 10,
    },
    philigramme: {
        color: '#505050',
        flex: 1,
        textAlign: 'center',
        marginTop:25,
    },
    
});