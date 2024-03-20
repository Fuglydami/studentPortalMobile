import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../component/container';
import HeaderText from '../../component/HeaderText';
import {Colors} from '../../contants/themes';
import assets from '../../contants/assets';
import DrawerSceneWrapper from '../../component/drawerSceneWrapper';
import Avatar from '../../asset/images/avatar-img.jpg';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import CustomButton from '../../component/button';
import {capitalizeFirstLetter} from '../../contants/utils/helper';

const Settings = ({navigation}: any) => {
  const {userData} = useGlobalContext();
  const {data} = userData;
  return (
    <DrawerSceneWrapper>
      <ScrollView
        style={{
          backgroundColor: Colors.white,
        }}>
        <Container notification={false}>
          <View style={styles.section}>
            <HeaderText
              text1="Settings"
              text2="Application Settings"
              marginBottom={4}
              textColor1={Colors.white}
              textColor2={Colors.accentGrey}
            />
          </View>
          <View style={{}}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.biodataImage}
                source={Avatar}
                alt="Avatar"
                resizeMode="contain"
              />

              <View style={styles.avatarContainer}>
                <Text style={styles.text1}>
                  {capitalizeFirstLetter(data.fullName)}
                </Text>
                <Text style={styles.text2}>{data.matricNo}</Text>
                <CustomButton
                  paddingVertical={4}
                  paddingHorizontal={20}
                  fontSize={14}
                  borderRadius={5}
                  title="View Bio Data"
                  onPress={() => navigation.navigate('Bio Data')}
                />
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    backgroundColor: Colors.darkGreen,
    height: 100,
  },
  avatarContainer: {
    gap: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: Colors.primaryBlack,
    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily: 'Mulish-ExtraBold',
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Mulish-ExtraBold',
    paddingHorizontal: 20,
    color: Colors.primaryBlack,
  },
  biodataImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 25,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});

export default Settings;
