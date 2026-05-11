import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const FloatingButton = () => {
  return (
    <TouchableOpacity
      style={[styles.floatContainer, { backgroundColor: "#4169E1" }]}
      activeOpacity={0.8}
    >
      <Ionicons name="add" size={28} color={"white"} />

      <Text style={[styles.floatingText, { color: "white" }]}>
        New Note
      </Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  floatContainer: {
    flexDirection: "row",
    alignItems: "center",

    position: "absolute",
    bottom: 60,
    right: 30,

    paddingHorizontal: 18,
    paddingVertical: 14,

    borderRadius: 30,

    borderWidth: 1,

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  floatingText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});