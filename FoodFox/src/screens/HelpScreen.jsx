import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        This is the Help Page
      </Text>
    </SafeAreaView>
  );
};

export default HelpScreen;

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