import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const bck = {
  uri: 'https://i.pinimg.c/originals/1b/03/20/1b0320003444f2cf9519a72793f42860.jpg',
};
const image = {
  uri: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
};

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#914' }}>
        <ImageBackground source={bck} style={{ padding: 20 }}>
          <Image
            source={image}
            style={{
              height: 80,
              width: 80,
              marginLeft: 10,
              borderRadius: 40,
              marginBottom: 10,
            }}></Image>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Chenna Rayudu
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#CCC',
        }}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='share-social-outline' size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              Share with a friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='exit-outline' size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign-out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
