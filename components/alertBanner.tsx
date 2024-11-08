import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlertBanner = ({ message }: { message: string }) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlertBanner;
