import {View, Text, StyleSheet, Image} from 'react-native';
import Container from '../../component/container';
import React from 'react';
import HeaderText from '../../component/HeaderText';
import {Colors} from '../../contants/themes';

import HomeSlider from '../../component/homeSlider';
import Spacer from '../../component/spacer';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import ErrorMessage from '../../component/errorMessage';

const Dashboard = ({navigation}: any) => {
  const {userData} = useGlobalContext();
  const words = userData.data.fullName.split(' ');
  const firstName = words.length > 0 ? words[0] : null;

  return (
    <Container backgroundColor="">
      <View style={styles.section}>
        <HeaderText
          text1={`Hi ${firstName}`}
          text2="Let's Start learning"
          marginBottom={4}
          textColor1={Colors.white}
          textColor2={Colors.accentGrey}
        />
        <HomeSlider onPress={() => navigation.navigate('Register Courses')} />
        <Spacer height={60} />
        <Text style={styles.text}>Ongoing Courses</Text>
        <ErrorMessage
          showButton={true}
          onPress={() => navigation.navigate('Register Courses')}
          text1="No Course Yet!"
          text2="You don’t have any ongoing course today."
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    backgroundColor: Colors.darkGreen,
    height: 185,
  },
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

export default Dashboard;
