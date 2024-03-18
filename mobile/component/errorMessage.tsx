import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import assets from '../contants/assets';
import CustomButton from './button';
import Spacer from './spacer';
import {Colors} from '../contants/themes';

const ErrorMessage = ({
  text1,
  text2,
  showButton = false,
  onPress,
}: {
  text1: string;
  text2: string;
  showButton?: boolean;
  onPress?: any;
}) => {
  return (
    <View style={styles.noCourse}>
      <Spacer height={20} />
      <Image source={assets.Nocourse} resizeMode="contain" />
      <Spacer height={10} />
      <Text style={styles.text1}>{text1}</Text>
      <Spacer height={5} />
      <Text style={styles.text2}>{text2}</Text>
      <Spacer height={25} />
      {showButton && (
        <CustomButton
          buttonColor={Colors.primaryGreen}
          onPress={onPress}
          fontSize={14}
          textColor={Colors.white}
          title="Click to Register"
          width={'50%'}
          height={40}
          paddingVertical={12}
          borderRadius={5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    fontFamily: '600',
    fontSize: 16,
    color: Colors.primaryBlack,
  },
  text2: {
    textAlign: 'center',
    color: Colors.lightGrey,
    fontWeight: '400',
    fontSize: 14,
  },
  noCourse: {
    // width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.primaryBlack,
    fontWeight: '700',
  },
});

export default ErrorMessage;
