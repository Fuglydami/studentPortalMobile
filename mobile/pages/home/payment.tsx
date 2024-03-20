import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import Container from '../../component/container';
import HeaderText from '../../component/HeaderText';
import {Colors} from '../../contants/themes';
import assets from '../../contants/assets';

const Payment = () => {
  const paymentOptions = [
    {
      title: 'My Payment',
      backgroundColor: '#fffee0',
      imageBackground: '#fffd8d',
      icons: assets.paymentIcon,
    },
    {
      title: 'Technology Fee',
      backgroundColor: '#e5e5ff',
      imageBackground: '#9999ff',

      icons: assets.technologyFeeIcon,
    },
    {
      title: 'Payment History',
      backgroundColor: '#e5e5ff',
      imageBackground: '#9999ff',

      icons: assets.paymentHistoryIcon,
    },
    {
      title: 'Print Receipt',

      backgroundColor: '#fffee0',
      imageBackground: '#fffd8d',
      icons: assets.printerIcon,
    },
    {
      title: 'Refresh Tech Fee',
      backgroundColor: '#fffee0',
      imageBackground: '#fffd8d',
      icons: assets.refreshIcon,
    },
    {
      title: 'Print Tech Fee',
      backgroundColor: '#e5e5ff',
      imageBackground: '#9999ff',

      icons: assets.printTechIcon,
    },
  ];
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
        <View style={styles.paymentOptionContainer}>
          {paymentOptions.map(item => {
            return (
              <View
                style={[
                  styles.paymentOption,
                  {backgroundColor: item.backgroundColor},
                ]}
                key={item.title}>
                <Text style={styles.text}>{item.title}</Text>
                <View
                  style={[
                    styles.imageContainer,
                    {backgroundColor: item.imageBackground},
                  ]}>
                  <Image
                    style={styles.image}
                    source={item.icons}
                    alt={item.title}
                    resizeMode="cover"
                  />
                </View>
              </View>
            );
          })}
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
  text: {
    color: Colors.primaryBlack,
  },
  image: {
    height: 60,
    width: 60,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    marginTop: 10,

    width: 90,
    padding: 20,
    borderRadius: 50,
  },
  paymentOptionContainer: {
    padding: 20,

    flexDirection: 'row',

    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15,
  },
  paymentOption: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flexGrow: 1,
    height: 150,
  },
});

export default Payment;
