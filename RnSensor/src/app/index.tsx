import { Text, View, StyleSheet } from "react-native";
import Accel from "@/screens/Accel"
import Gyro from "@/screens/Gyro"
import Light from "@/screens/Light"
import DeviceMot from "@/screens/DeviceMot"
export default function Index() {
  
  return (
    <DeviceMot />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
