import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Elements */}
      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.emoji}>⚛️</Text>

        <Text style={styles.title}>React Native</Text>

        <View style={styles.line} />

        <Text style={styles.subtitle}>MINI PROJECTS</Text>

        <Text style={styles.description}>
          Build beautiful mobile apps while learning modern React Native.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },

  circleOne: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: "#7C3AED",
    opacity: 0.15,
    top: -100,
    left: -120,
  },

  circleTwo: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#2563EB",
    opacity: 0.15,
    bottom: -50,
    right: -70,
  },

  card: {
    width: 320,
    height: 500,
    backgroundColor: "#172033",
    borderRadius: 35,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,

    elevation: 10,
    paddingHorizontal: 30,
  },

  emoji: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: -1,
  },

  line: {
    width: 60,
    height: 4,
    borderRadius: 10,
    backgroundColor: "#60A5FA",
    marginVertical: 20,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#94A3B8",
    letterSpacing: 6,
  },

  description: {
    marginTop: 25,
    textAlign: "center",
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 24,
  },
});