import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href="/task">Go to task PAge</Link>
      <Link href="/123">Go to id PAge</Link>
      <Link href="/docs/dsa">Go to Topic</Link>
      <Link href="/cot/about">Go to about</Link>
      <Link href="/login">Go to Login Page</Link>
      <Link href="/logout">Go to Logout Page</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
