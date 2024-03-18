import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../contants/themes';
import assets from '../contants/assets';
import {useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('CarouselComponent');
    }, 4000);
  }, []);
  return (
    <View style={styles.sectionContainer}>
      <Image
        source={assets.SplashLogo}
        resizeMode="cover"
        style={styles.logoImage}
      />
      <Text style={styles.logoText}>LODLC</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontWeight: '700',
    fontSize: 36,
    color: Colors.primaryGreen,
  },
  logoImage: {
    height: 96,
    marginBottom: 10,
  },
});

export default SplashScreen;
