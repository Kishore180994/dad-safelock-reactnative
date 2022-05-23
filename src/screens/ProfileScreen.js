import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ProfileScreen = () => {
  const bck = {
    uri: 'https://i.pinimg.com/originals/1b/03/20/1b0320003444f2cf9519a72793f42860.jpg',
  };
  const image = {
    uri: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
  };
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDOB] = useState('');
  const [loc, setLoc] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={bck}
          style={{ padding: 20, position: 'relative', height: 100 }}>
          <Image
            source={image}
            style={{
              position: 'absolute',
              bottom: -50,
              left: 30,
              height: 80,
              width: 80,
              marginLeft: 10,
              borderRadius: 40,
              marginBottom: 10,
            }}></Image>

          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: -70,
              right: 10,
              padding: 10,
              borderRadius: 20,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text style={{ fontWeight: '800' }}>Update profile</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            bottom: -70,
          }}>
          <View style={Styles.listView}>
            <Text style={Styles.listItem}>Name</Text>
            <TextInput onChangeText={setName} value={name} />
          </View>
          <View style={Styles.listView}>
            <Text style={Styles.listItem}>Bio</Text>
            <TextInput onChangeText={setBio} value={bio} multiline />
          </View>
          <View style={Styles.listView}>
            <Text style={Styles.listItem}>Birth date</Text>
            <TextInput onChangeText={setDOB} value={dob} />
          </View>
          <View style={Styles.listView}>
            <Text style={Styles.listItem}>Location</Text>
            <TextInput onChangeText={setLoc} value={loc} />
          </View>
          <View style={Styles.listView}>
            <Text style={Styles.listItem}>Profession</Text>
            <TextInput onChangeText={setProfession} value={profession} />
          </View>
          <View style={Styles.listView}>
            <Text style={Styles.listItem}>Phone</Text>
            <TextInput onChangeText={setPhone} value={phone} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  listItem: {
    fontWeight: '600',
    fontSize: 17,
    padding: 10,
    flexBasis: '40%',
  },
  listView: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginRight: '30%',
  },
});

export default ProfileScreen;
