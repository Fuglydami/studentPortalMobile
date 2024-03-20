import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

import Avatar from '../asset/images/avatar-img.jpg';
import {useGlobalContext} from '../hooks/useGlobalContext';
import {Colors} from '../contants/themes';
import Dashboard from '../asset/icons/home.png';

import AvatarIcon from '../asset/icons/avatar.png';
import SettingIcon from '../asset/icons/setting.png';

import Logout from '../asset/icons/logout.png';
import {capitalizeFirstLetter} from '../contants/utils/helper';

const DrawerContentItem = ({label, onPress, image}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 15,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="cover" style={styles.icon} />
      </View>
      <Text style={{color: Colors.white, fontSize: 16}}>{label}</Text>
    </TouchableOpacity>
  );
};

const DrawerContent = ({navigation}: any) => {
  const {userData, setUserData} = useGlobalContext();

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={Avatar} resizeMode="cover" />
      <Text style={styles.name}>
        {capitalizeFirstLetter(userData.data.fullName)}
      </Text>
      <Text style={styles.matric}>{userData.data.matricNo}</Text>
      <DrawerContentItem
        image={Dashboard}
        label="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <DrawerContentItem
        image={AvatarIcon}
        label="Bio-Data"
        onPress={() => navigation.navigate('Bio Data')}
      />
      <DrawerContentItem
        image={SettingIcon}
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <DrawerContentItem
        image={Logout}
        label="Log Out"
        onPress={() => {
          setUserData(null);
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  imageContainer: {
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#18D679',
  },
  icon: {
    height: 15,
    width: 15,
    tintColor: Colors.white,
  },
  name: {
    color: Colors.white,
    paddingTop: 15,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 20,
    fontWeight: '500',
  },
  matric: {
    fontFamily: 'Quicksand-SemiBold',
    color: Colors.white,
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});
export default DrawerContent;
