import React from 'react';

import CustomDrawer from '../Components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../src/screens/SettingsScreen';

import { Ionicons } from '@expo/vector-icons';
import VaultScreen from '../src/screens/VaultScreen';

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
        name='Vault'
        component={VaultScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='list-outline' size={24} color={color} />
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
