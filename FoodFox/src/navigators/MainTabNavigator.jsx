import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ProfileDrawer from "./ProfileDrawerNavigator";


const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#FE5A00',
      tabBarInactiveTintColor: 'black',
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
      },
      tabBarStyle: {
        display: route.name === 'Search' || route.name === 'Profile'
          ? 'none'
          : route.name === 'Home'
            ? getFocusedRouteNameFromRoute(route) ===
              'RestaurantDetailsScreen'
              ? 'none'
              : 'flex'
            : 'flex',
        backgroundColor: '#f5cbb4',
        elevation: 5,
        position: 'absolute',

        bottom: 20,
        left: 15,
        right: 15,

        borderRadius: 15,
        height: 60,

        paddingBottom: 5,
        marginHorizontal: 10,



      },
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarBadge: 3
      }} />
      <Tab.Screen name="Profile" component={ProfileDrawer} />
    </Tab.Navigator>
  );
}