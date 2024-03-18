import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import assets from '../contants/assets';
import {Colors} from '../contants/themes';

const LogoHeader = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={assets.Logo} resizeMode="cover" style={styles.logoImage} />
      <Text style={styles.title}>LODLC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoImage: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Mulish-ExtraBold',

    color: Colors.primaryBlack,
  },
});

export default LogoHeader;
