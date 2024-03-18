import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../contants/themes';
import Container from '../../component/container';
import HeaderText from '../../component/HeaderText';
import Accordion from '../../component/accordion';
import Spacer from '../../component/spacer';
import CustomButton from '../../component/button';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import CustomModal from '../../component/modal';
import CustomRadioButton from '../../component/radioButton';
import {useApiService} from '../../hooks/useApiService';
import {COURSES} from '../../services/api-url';

import ErrorMessage from '../../component/errorMessage';
import ModalContentAlert from '../../component/modalContent';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const RegisterCourses = () => {
  const {isModalVisible, toggleModal} = useGlobalContext();
  const {userData} = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);
  const [courses, setCourses] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [registerCourse, setRegisterCourse] = useState<any>(null);
  const {get, post} = useApiService();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);

  const handleToggle = (course: any) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(item => item !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const getCourses = async (checkLoading = true) => {
    const customHeaders = {
      matricNo: userData.data.matricNo,
    };
    checkLoading && setLoading(true);
    setCourses([]);
    setSelectedCourses([]);
    setError('');
    const data = await get<{message: string}>(
      `${COURSES}/${userData.data.level}`,
      userData.token.access_Token,
      customHeaders,
    );
    setLoading(false);

    setError(data.error);

    setCourses(data?.data);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getCourses();
    setRefreshing(false);
  };

  const handleSubmit = async () => {
    const customHeaders = {
      matricNo: userData.data.matricNo,
    };

    if (selectedCourses.length > 0) {
      setIsLoading(true);
      const data = await post<{message: string}>(
        COURSES,
        selectedCourses,
        userData.token.access_Token,
        customHeaders,
      );
      setIsLoading(false);
      setRegisterCourse({
        error: data.error,
      });

      toggleModal();
      getCourses(false);
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'Select course(s) to register',
      });
    }
    // setError(data.error);
    // getCourses()
  };

  useEffect(() => {
    getCourses();
  }, []);

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
            text1="Register Courses"
            text2={userData.data?.session}
            marginBottom={4}
            textColor1={Colors.white}
            textColor2={Colors.accentGrey}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>NOTE</Text>
          <Text style={styles.units}>Total number of units allowed: 23</Text>
          <Text style={styles.units}>Minimum number of units allowed: 18</Text>
          <Text style={styles.units}>Maximum number of units allowed: 25</Text>
          <Text style={styles.units}>Compulsory courses - C</Text>
          <Text style={styles.units}>Required courses - R</Text>
          <Text style={styles.units}>Elective courses - E</Text>
          <Spacer height={15} />
          <View>
            {loading && (
              <ActivityIndicator
                size="large"
                style={styles.indicator}
                color={Colors.primaryGreen}
              />
            )}
            {courses?.data?.length !== 0 && !loading && courses !== null && (
              <Accordion
                accordiontitle="Normal Courses"
                content={courses?.data}
                courseAction={props => (
                  <CustomRadioButton
                    isSelected={selectedCourses.includes(props.courseId)}
                    handleToggle={() => handleToggle(props.courseId)}
                  />
                )}
                handleToggle={handleToggle}
                isSelected={isSelected}
                setSelectedCourse={setSelectedCourse}
                selectedCourse={selectedCourse}
              />
            )}
            {!error || (
              <ErrorMessage text1="Error!" text2="No course(s) found" />
            )}
            {courses?.data?.length === 0 && (
              <ErrorMessage text1="Not available!" text2={courses?.message} />
            )}
          </View>
          <Spacer height={30} />
          {!loading && !error && courses?.data?.length !== 0 && (
            <CustomButton
              disable={isLoading}
              onPress={handleSubmit}
              title={isLoading ? 'processing...' : 'Submit selected courses'}
            />
          )}
          <Spacer height={30} />
        </View>
        <CustomModal toggleModal={toggleModal} isModalVisible={isModalVisible}>
          <ModalContentAlert
            error={registerCourse?.error}
            title={
              registerCourse?.error
                ? 'Registration Failed!'
                : 'Course Registration Completed'
            }
            content={
              registerCourse?.error
                ? 'Try again later'
                : 'Congratulations, you have completed your course registration.'
            }
            onPress={toggleModal}
            buttonText="Print course form"
          />
          {/* <View style={styles.modalContainer}>
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
          /> */}
        </CustomModal>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    marginVertical: 48,
  },
  scrollView: {
    flex: 1,
  },
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
  error: {
    fontSize: 16,
    paddingVertical: 48,
    color: Colors.primaryBlack,
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

export default RegisterCourses;
