import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ text, setText, placeholder }) => {
  return (
    <View style={styles.parentView}>
      <Ionicons name='search-outline' size={24} color='black' />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    height: 50,
    width: '96%',
    borderWidth: 1,
    borderRadius: 40,
    alignSelf: 'center',
    padding: 10,
  },
  input: {
    // borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: 40,
    height: 50,
    width: '90%',
  },
});

export default SearchBar;
