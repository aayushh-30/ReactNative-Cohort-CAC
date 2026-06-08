import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Sql from "@/screens/Sql"

export default function Index() {
  return (
    <Sql />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f14",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  
});
