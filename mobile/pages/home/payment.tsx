import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Container from '../../component/container';
import HeaderText from '../../component/HeaderText';
import {Colors} from '../../contants/themes';

const Payment = () => {
  return (
    <ScrollView>
      <Container backgroundColor="">
        <View style={styles.section}>
          <HeaderText
            text1="Payment"
            text2="Select Payment to make"
            marginBottom={4}
            textColor1={Colors.white}
            textColor2={Colors.accentGrey}
          />
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    backgroundColor: Colors.darkGreen,
    height: 100,
  },
});

export default Payment;
