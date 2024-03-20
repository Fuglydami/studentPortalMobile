import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../contants/themes';
import assets from '../contants/assets';
import DrawerNavigator from './drawerSceneWrapper.tsx';
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';

const Header = ({notification = true}: any) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer}>
          <Image
            source={assets.MenuIcon}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        {notification && (
          <Image
            source={assets.NotificationIcon}
            resizeMode="contain"
            style={styles.image}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: Colors.darkGreen,
    color: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    tintColor: Colors.white,
  },
});

export default Header;
