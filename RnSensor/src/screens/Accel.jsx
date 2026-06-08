import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAccel from '../hooks/use-accel';

const BALL_SIZE = 84;

const calcMagnitude = (x, y, z) => {
  return Math.sqrt(x * x + y * y + z * z);
};

const Accel = () => {
  const { x, y, z } = useAccel();

  const magnitude = calcMagnitude(x, y, z);
  const shaking = magnitude > 15;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stage}>
        <View style={styles.card}>
          <View style={styles.values}>
            <Text style={styles.valueText}>
              x: {x.toFixed(2)}
            </Text>

            <Text style={styles.valueText}>
              y: {y.toFixed(2)}
            </Text>

            <Text style={styles.valueText}>
              z: {z.toFixed(2)}
            </Text>

            <Text style={styles.valueText}>
              Magnitude: {magnitude.toFixed(2)}
            </Text>

            <Text
              style={[
                styles.valueText,
                styles.shakeText,
              ]}
            >
              {shaking ? '📳 Shaking!' : '😌 Still'}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Accel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080808',
  },

  stage: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '88%',
    maxWidth: 340,
    minHeight: 320,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  values: {
    marginTop: 28,
    alignItems: 'center',
  },

  valueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },

  shakeText: {
    fontSize: 22,
    marginTop: 20,
  },

  ball: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: 'red',
  },
});