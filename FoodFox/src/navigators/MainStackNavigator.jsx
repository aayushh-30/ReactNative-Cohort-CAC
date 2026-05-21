import { createStackNavigator } from "@react-navigation/stack";
import Onbording from "../screens/Onbording";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import TabNavigator from "./MainTabNavigator";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

function HomeScreenWrapper() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <TabNavigator />
    </>
  );
}

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onbording" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onbording" component={Onbording} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreenWrapper} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}