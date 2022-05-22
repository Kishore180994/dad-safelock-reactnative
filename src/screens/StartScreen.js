import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>
          Rayudu Safelock
        </Text>
      </View>
      <MaterialCommunityIcons name='lock-plus' size={100} color='black' />
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
          Let's begin
        </Text>
        <MaterialIcons name='keyboard-arrow-right' size={24} color='white' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
