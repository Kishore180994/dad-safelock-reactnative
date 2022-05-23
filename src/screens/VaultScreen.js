import React from 'react';
import { Button, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordScreen from './PwdScreen';
import AddAccount from './AddAccount';
import { State } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const VaultScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='password'
        component={PasswordScreen}
        options={{
          title: 'Vault',
          headerStyle: {
            backgroundColor: '#914',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen name='addAccount' component={AddAccount} />
    </Stack.Navigator>
  );
};

export default VaultScreen;
