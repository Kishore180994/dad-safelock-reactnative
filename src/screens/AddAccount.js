import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddAccount = ({ navigation, route }) => {
  const [acc, setAcc] = useState('');
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const { getData } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            getData({ account: acc, username: user, password: pwd });
            navigation.navigate('password');
          }}
          title='Add'
        />
      ),
    });
  }, [navigation, acc, user, pwd, getData]);
  return (
    <SafeAreaView style={styles.parent}>
      <View
        style={{
          height: 200,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Ionicons name='lock-closed-outline' size={30} color='black' />
        <Text style={{ marginTop: 20 }}>Please enter the account details!</Text>
      </View>
      <View style={styles.sub}>
        <View style={styles.textView}>
          <Text style={styles.text}>Account name</Text>
          <TextInput onChangeText={setAcc} value={acc} style={styles.input} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>User name</Text>
          <TextInput onChangeText={setUser} value={user} style={styles.input} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Password</Text>
          <TextInput onChangeText={setPwd} value={pwd} style={styles.input} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
  },
  sub: {
    display: 'flex',
    height: '50%',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 40,
    width: '60%',
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    flexBasis: '30%',
    fontWeight: '600',
  },
});

export default AddAccount;
