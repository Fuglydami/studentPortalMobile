import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../contants/themes';
import {HeaderTextType} from '../contants/types';
import {useGlobalContext} from '../hooks/useGlobalContext';

const HeaderText = ({
  text1,
  text2,
  marginBottom,
  textColor1,
  textColor2,
}: HeaderTextType) => {
  const styles = StyleSheet.create({
    text1: {
      fontSize: 28,
      fontFamily: 'Quicksand-Bold',
      color: textColor1 || Colors.primaryBlack,
      marginBottom: marginBottom !== undefined ? marginBottom : 6,
    },
    text2: {
      fontSize: 14,
      fontFamily: 'Mulish-Medium',
      color: textColor2 || Colors.lightGrey,
    },
  });

  return (
    <View>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

export default HeaderText;
