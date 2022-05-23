import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AccountInfo from '../../Components/AccountInfo';
import SearchBar from '../../Components/SearchBar';

const PasswordScreen = ({ navigation, route }) => {
  const [accounts, addAccount] = useState([]);
  const [search, setSearch] = useState('');
  const getData = (data) => {
    addAccount([...accounts, data]);
  };

  return (
    <SafeAreaView style={Styles.parent}>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <SearchBar text={search} setText={setSearch} placeholder='Search' />
        </View>
        <View>
          {accounts.length === 0 ? (
            <View
              style={{
                flex: 1,
                height: 500,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  fontWeight: '100',
                }}>
                No new accounts, click on '+' to add accounts
              </Text>
            </View>
          ) : (
            accounts.map((accountInfo, idx) => {
              const { account } = accountInfo;
              if (
                account
                  .trim()
                  .toLowerCase()
                  .indexOf(search.trim().toLowerCase()) !== -1 ||
                search === ''
              )
                return (
                  <View
                    key={idx}
                    style={{ alignItems: 'center', marginBottom: 10 }}>
                    <AccountInfo accountInfo={accountInfo} />
                  </View>
                );
              else return null;
            })
          )}
        </View>
      </ScrollView>
      <Pressable
        style={({ pressed }) => [
          {
            shadowColor: '#000',
            shadowOffset: pressed
              ? { width: -3, height: 2 }
              : { width: -7, height: 6 },
            shadowOpacity: 1,
            shadowRadius: 3,
          },
          Styles.add,
        ]}
        onPress={() => {
          navigation.navigate('addAccount', {
            getData: getData,
          });
        }}>
        <Ionicons name='add' size={35} color='white' />
      </Pressable>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  parent: {
    position: 'relative',
    borderColor: 'black',
    height: '100%',
    marginTop: 10,
  },
  add: {
    position: 'absolute',
    borderRadius: '50%',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: '#0352ff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '800',
    bottom: 50,
    right: '10%',
    backgroundColor: '#0352ff',
  },
});

export default PasswordScreen;
