import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF', // Blanc pour l'icône active
        tabBarInactiveTintColor: 'gray', // Gris clair pour les icônes inactives
        tabBarStyle: {
          backgroundColor: '#000000', // Fond noir ou gris foncé
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          shadowColor: '#000', // Couleur de l'ombre
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 10, // Pour les ombres sur Android
          borderTopWidth: 2,
          borderTopColor: '#333333', // Couleur de la bordure
      },      
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'home' : 'home-outline'} 
              color={color} 
              style={focused ? { transform: [{ scale: 1.2 }] } : {}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="carte"
        options={{
          title: 'Carte',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'map' : 'map-outline'} 
              color={color} 
              style={focused ? { transform: [{ scale: 1.2 }] } : {}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="quizz"
        options={{
          title: 'Quizz',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'help-circle' : 'help-circle-outline'} 
              color={color} 
              style={focused ? { transform: [{ scale: 1.2 }] } : {}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'person' : 'person-outline'} 
              color={color} 
              style={focused ? { transform: [{ scale: 1.2 }] } : {}}
            />
          ),
        }}
      />
    </Tabs>
  );
}
