import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Spacer from './spacer';
import CustomButton from './button';
import assets from '../contants/assets';
import {Colors} from '../contants/themes';

const ModalContentAlert = ({
  title,
  content,
  onPress,
  buttonText,
  error,
}: any) => {
  return (
    <>
      {error ? (
        ''
      ) : (
        <View style={styles.modalContainer}>
          <Image source={assets.successIcon} resizeMode="contain" />
        </View>
      )}

      <Text style={styles.modalText1}>{title}</Text>
      <Spacer height={10} />
      <Text style={styles.modalText2}>{content}</Text>
      <Spacer height={20} />
      {error ? (
        ''
      ) : (
        <>
          <Spacer height={10} />
          <CustomButton
            borderRadius={12}
            paddingVertical={12}
            onPress={onPress}
            title={buttonText}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalText1: {
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    color: Colors.primaryBlack,
    textAlign: 'center',
    fontWeight: '600',
  },
  modalText2: {
    fontSize: 12,
    color: Colors.lightGrey,
    textAlign: 'center',
  },
});

export default ModalContentAlert;
