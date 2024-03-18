import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../contants/themes';
import Container from '../../component/container';
import HeaderText from '../../component/HeaderText';
import Accordion from '../../component/accordion';
import Spacer from '../../component/spacer';
import CustomButton from '../../component/button';
import {useGlobalContext} from '../../hooks/useGlobalContext';

import assets from '../../contants/assets';

import {useApiService} from '../../hooks/useApiService';
import {
  DELETE_REGISTERED_COURSES,
  GET_REGISTERED_COURSES,
} from '../../services/api-url';
import ErrorMessage from '../../component/errorMessage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const DeleteIcon = ({handleToggle, loading}: any) => {
  return (
    <TouchableOpacity onPress={handleToggle} style={styles.deleteIcon}>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.primaryGreen} />
      ) : (
        <Image
          source={assets.trashIcon}
          alt="delete icon"
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const Courses = ({navigation}: any) => {
  const {userData} = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);
  const [courses, setCourses] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const {get, remove} = useApiService();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalUnits, setTotalUnits] = useState(0);
  const [isSelected, setSelection] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const getTotalUnitRegistered = ({data}: any) => {
    let units = 0;
    for (const course of data) {
      const unitValue = parseInt(course?.unit.split(' ')[0], 10);
      units += unitValue;
    }

    setTotalUnits(units);
  };
  const getCourses = async (checkLoading = true) => {
    const customHeaders = {
      matricNo: userData.data.matricNo,
    };
    checkLoading && setLoading(true);
    // setCourses([]);
    setSelectedCourse(null);
    setError('');
    const data = await get<{message: string}>(
      `${GET_REGISTERED_COURSES}`,
      userData.token.access_Token,
      customHeaders,
    );
    setLoading(false);
    getTotalUnitRegistered(data?.data);
    console.log(data, 'data');
    setError(data.error);

    setCourses(data);
  };
  const onRefresh = async () => {
    setRefreshing(true);
    await getCourses();
    setRefreshing(false);
  };

  const handleDeleteCourse = async (course: any) => {
    setSelectedCourse(course.id);

    try {
      const customHeaders = {
        matricNo: userData.data.matricNo,
      };

      setIsLoading(true);
      const data = await remove<{message: string}>(
        `${DELETE_REGISTERED_COURSES}/${course.id}`,
        userData.token.access_Token,
        customHeaders,
      );

      setIsLoading(false);
      // setRegisterCourse({
      //   error: data.error,
      // });
      if (data.error) {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: 'Failed to delete',
        });
      }
      if (data.data) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Error',
          textBody: data.data.message,
        });
      }

      // toggleModal();
      getCourses(false);
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'An error occured, try again later',
      });
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  const {isModalVisible, toggleModal} = useGlobalContext();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[Colors.primaryGreen]}
        />
      }>
      <Container backgroundColor="">
        <View style={styles.section}>
          <HeaderText
            text1="Registered Courses"
            text2={userData.data?.session}
            marginBottom={4}
            textColor1={Colors.white}
            textColor2={Colors.accentGrey}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>NOTE</Text>
          <Text style={styles.units}>
            Total number of units registered: {totalUnits}
          </Text>

          <Spacer height={15} />
          <View>
            {loading && (
              <ActivityIndicator
                size="large"
                style={styles.indicator}
                color={Colors.primaryGreen}
              />
            )}

            {courses?.data?.data?.length !== 0 &&
              !loading &&
              courses !== null && (
                <Accordion
                  courseAction={props => (
                    <DeleteIcon
                      loading={
                        loading &&
                        courses?.data?.data.filter(
                          item => item === selectedCourse,
                        )[0]?.id
                      }
                      courses={courses?.data}
                      handleToggle={() => handleDeleteCourse(props.courseId)}
                    />
                  )}
                  handleToggle={handleDeleteCourse}
                  isSelected={isSelected}
                  // setSelectedCourse={setSelectedCourse}
                  // selectedCourse={selectedCourse}
                  content={courses?.data?.data}
                  accordiontitle="2022/2023 Academic Session"
                />
              )}

            {((courses?.data?.data?.length === 0 && !loading) || error) && (
              <ErrorMessage
                showButton={true}
                onPress={() => navigation.navigate('Register Courses')}
                text1="Not available!"
                text2={courses?.message}
              />
            )}
          </View>
          <Spacer height={30} />
          {!loading && !error && courses?.data?.data.length !== 0 && (
            <CustomButton
              onPress={() =>
                Toast.show({
                  type: ALERT_TYPE.SUCCESS,
                  title: 'Success',
                  textBody: 'Success Message',
                })
              }
              title="Print course form"
            />
          )}
          <Spacer height={30} />
        </View>
        {/* <CustomModal toggleModal={toggleModal} isModalVisible={isModalVisible}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image source={assets.successIcon} resizeMode="contain" />
          </View>

          <Text style={styles.modalText1}>Course Registration Completed</Text>
          <Spacer height={10} />
          <Text style={styles.modalText2}>
            Congratulations, you have completed your course registration.
          </Text>
          <Spacer height={30} />

          <CustomButton
            borderRadius={12}
            paddingVertical={12}
            onPress={toggleModal}
            title="Print course form"
          />
        </CustomModal> */}
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalText1: {
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    color: Colors.primaryBlack,
    textAlign: 'center',
    fontWeight: '600',
  },
  deleteIcon: {
    marginRight: 8,
  },
  indicator: {
    marginVertical: 48,
  },
  error: {
    fontSize: 16,
    paddingVertical: 48,
    color: Colors.primaryBlack,
    textAlign: 'center',
  },
  modalText2: {
    fontSize: 12,
    color: Colors.lightGrey,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    backgroundColor: Colors.darkGreen,
    height: 100,
  },
  units: {
    fontSize: 12,
    color: Colors.primaryBlack,
    marginBottom: 8,
  },
  title: {
    color: Colors.primaryBlack,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});

export default Courses;
