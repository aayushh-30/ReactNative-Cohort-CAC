import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/ResturantDetailsScreen';


const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="RestaurantDetailsScreen" component={RestaurantDetailsScreen} />
    </HomeStack.Navigator>
  );
}