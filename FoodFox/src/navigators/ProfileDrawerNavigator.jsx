import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OrderScreen from '../screens/OrderScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0}}>
        
        <View style={styles.drawerHeader}>
          
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/FoodFox/FoodFoxLogo.png')}
              style={styles.profileImage}
            />

            <Text style={styles.userName}>FoodFox</Text>

            <Text style={styles.userEmail}>
              foodfoxdelivery@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.drawerItems}>
          <DrawerItemList {...props} />

          <Pressable style={styles.logoutButton} onPress={()=>{
            navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]})
          }}>
            <Ionicons
              name="log-out-outline"
              size={22}
              color="#FE5A00"
            />,
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default function ProfileDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} />
      )}

      screenOptions={{
        headerStyle: {
          backgroundColor: '#FE5A00',
        },

        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: '700',
        },

        drawerActiveBackgroundColor: '#FFF2EB',

        drawerActiveTintColor: '#FE5A00',

        drawerInactiveTintColor: '#444',

        drawerLabelStyle: {
          marginLeft: 3,
          fontSize: 15,
          fontWeight: '600',
        },

        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
      }}>

      <Drawer.Screen
        name="ProfileDrawer"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
      
      <Drawer.Screen
        name="Order"
        component={OrderScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="receipt-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="help-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#FE5A00',
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  profileContainer: {
    alignItems: 'center',
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
  },

  userName: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
  },

  userEmail: {
    marginTop: 4,
    fontSize: 13,
    color: '#FFE7D8',
  },

  drawerItems: {
    
    marginTop: 20,
    paddingHorizontal: 10,
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 10,
    borderRadius: 14,
    backgroundColor: '#FFF2EB',
  },

  logoutText: {
    color: '#FE5A00',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 12,
  },
});