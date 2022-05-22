import React from 'react';

import CustomDrawer from '../Components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/HomeScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import ChittiScreen from '../src/screens/ChittiScreen';
import PasswordScreen from '../src/screens/PwdScreen';
import SettingsScreen from '../src/screens/SettingsScreen';

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -25 },
        drawerActiveBackgroundColor: '#914',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='home-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Vault'
        component={PasswordScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='list-outline' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Chitti'
        component={ChittiScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='book-outline' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
