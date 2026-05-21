import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        This is the Setting Page
      </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FE5A00',
  },
});