import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface ProfilTouchProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

const ProfilTouch: React.FC<ProfilTouchProps> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touch}>
      <View style={styles.content}>
        {icon && <Ionicons name={icon} size={20} color="#FFFFFF" style={styles.icon} />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilTouch;

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#000000', // Fond noir
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderColor: '#333333', // Bordure pour séparer légèrement
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#FFFFFF', // Texte en blanc pour le contraste
    fontSize: 16,
  },
});
