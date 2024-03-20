import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../component/container';
import HeaderText from '../../component/HeaderText';
import {Colors} from '../../contants/themes';
import DrawerSceneWrapper from '../../component/drawerSceneWrapper';
import Avatar from '../../asset/images/avatar-img.jpg';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import {NOKDetails, YourDetails} from '../../component/bioDataInformation';

const BioData = () => {
  const {userData} = useGlobalContext();
  const [activeTab, setActiveTab] = useState(0);
  const {data} = userData;

  const handleTabPress = index => {
    setActiveTab(index);
  };

  const Tab = ({title, isActive, onPress}: any) => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.tab, isActive && styles.activeTab]}>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {title}
        </Text>
      </Pressable>
    );
  };

  return (
    <DrawerSceneWrapper>
      <ScrollView
        style={{
          backgroundColor: Colors.white,
        }}>
        <Container notification={false}>
          <View style={styles.section}>
            <HeaderText
              text1="Bio-Data"
              text2="Personal Details"
              marginBottom={4}
              textColor1={Colors.white}
              textColor2={Colors.accentGrey}
            />
          </View>
          <View style={{}}>
            <View style={styles.imageContainer}>
              <View>
                <Image
                  style={styles.biodataImage}
                  source={Avatar}
                  alt="Avatar"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View>
              <View style={styles.container}>
                <View style={styles.tabContainer}>
                  <Tab
                    title="Your Details"
                    isActive={activeTab === 0}
                    onPress={() => handleTabPress(0)}
                  />
                  <Tab
                    title="Next of Kin Details"
                    isActive={activeTab === 1}
                    onPress={() => handleTabPress(1)}
                  />
                </View>
                {activeTab === 0 && <YourDetails data={data} />}
                {activeTab === 1 && <NOKDetails data={data} />}
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  container: {
    paddingHorizontal: 30,
  },
  tabContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,

    paddingBottom: 30,
  },
  tab: {
    flexGrow: 1,
    paddingBottom: 15,
    borderRadius: 5,
  },
  activeTab: {
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primaryGreen,
  },
  activeTabText: {
    color: Colors.primaryGreen,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.grey,
  },
  biodataImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});

export default BioData;
