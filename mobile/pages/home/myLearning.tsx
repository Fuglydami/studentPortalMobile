import {View, ScrollView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Container from '../../component/container';

import {Colors} from '../../contants/themes';
import HeaderText from '../../component/HeaderText';
import {useGlobalContext} from '../../hooks/useGlobalContext';

const MyLearning = () => {
  const {userData} = useGlobalContext();

  return (
    <ScrollView>
      <Container backgroundColor="">
        <View style={styles.section}>
          <HeaderText
            text1="My Learning"
            text2={userData.data?.session}
            marginBottom={4}
            textColor1={Colors.white}
            textColor2={Colors.accentGrey}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={Colors.primaryBlack}
            placeholder="Search a course"
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
    height: 148,
  },

  textInput: {
    marginTop: 20,
    backgroundColor: '#F0FFF7',
    height: 48,
    color: Colors.primaryBlack,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default MyLearning;
