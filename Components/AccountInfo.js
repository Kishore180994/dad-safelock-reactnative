import React from 'react';
import {
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountInfo = ({ accountInfo }) => {
  const { account, username, password } = accountInfo;
  return (
    <Pressable
      style={({ pressed }) => [
        {
          height: pressed ? 120 : 50,
        },
        styles.parentView,
      ]}>
      {({ pressed }) => {
        if (pressed) {
          LayoutAnimation.easeInEaseOut();
          return (
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.header}>{account}</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <View style={styles.textView}>
                  <Ionicons name='person-outline' size={24} color='black' />
                  <Text style={styles.username}>{username}</Text>
                </View>
                <View style={styles.textView}>
                  <Ionicons name='keypad' size={24} color='black' />
                  <Text style={styles.username}>{password}</Text>
                </View>
              </View>
            </View>
          );
        } else {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.header}>{account}</Text>
            </View>
          );
        }
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentView: {
    borderWidth: 1,
    width: '90%',
    borderRadius: '20px',
    borderColor: 'grey',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    left: 20,
  },
  username: {
    fontSize: 18,
    flexBasis: '60%',
    textAlign: 'center',
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default AccountInfo;
