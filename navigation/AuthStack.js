import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/StartScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OnBoarding' component={HomeScreen} />
      <Stack.Screen name='Login' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
