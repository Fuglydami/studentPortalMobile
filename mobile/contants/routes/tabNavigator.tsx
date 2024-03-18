import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useNavigation,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

import Dashboard from '../../pages/home/dashboard';
import Payment from '../../pages/home/payment';
import MyLearning from '../../pages/home/myLearning';
import RegisterCourses from '../../pages/home/registerCourses';
import Courses from '../../pages/home/courses';

import {Colors} from '../themes';
import assets from '../assets';
import DrawerSceneWrapper from '../../component/drawerSceneWrapper';
import {useGlobalContext} from '../../hooks/useGlobalContext';

interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const Tab = createBottomTabNavigator();

const IconSwitch = (route: {name: string}) => {
  if (route.name === 'Dashboard') {
    return assets.DashboardIcon;
  } else if (route.name === 'Courses') {
    return assets.CoursesIcon;
  } else if (route.name === 'Register Courses') {
    return assets.RegisterCoursesIcon;
  } else if (route.name === 'My Learning') {
    return assets.MyLearningIcon;
  } else if (route.name === 'Payment') {
    return assets.PaymentIcon;
  }
};

const TabNavigator: React.FC<{route: any}> = ({route}) => {
  const {userData} = useGlobalContext();
  const navigation = useNavigation();

  const focusedRoute = getFocusedRouteNameFromRoute(route);
  const isFocused = focusedRoute === 'Register Courses';

  const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
    children,
    onPress,
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.customTabBarButtonContainer}>
      <View style={styles.customTabBarButtonView}>{children}</View>
    </TouchableOpacity>
  );

  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
        screenOptions={({route}) => ({
          animationEnabled: true,
          tabBarActiveTintColor: Colors.primaryGreen,
          tabBarInactiveTintColor: '#B7B7B7',
          unmountOnBlur: true,
          tabBarStyle: {
            height: 80,
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: '#ffffff',
          },
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            fontSize: 11,
          },
          tabBarLabel: ({focused, color}) => {
            let iconName = IconSwitch(route);
            return (
              <>
                {route.name === 'Register Courses' ? null : (
                  <>
                    <Image
                      source={iconName}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? Colors.primaryGreen : '#B7B7B7',
                        marginBottom: 5,
                      }}
                    />
                    <Text
                      style={{
                        color: focused ? Colors.primaryGreen : '#B7B7B7',
                        marginBottom: 15,
                        fontSize: 11,
                      }}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {route.name}
                    </Text>
                  </>
                )}
              </>
            );
          },
          tabBarIcon: () => null,
        })}
        initialRouteName="Dashboard">
        <Tab.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Courses"
          component={Courses}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: Colors.primaryGreen,
            tabBarInactiveTintColor: '#B7B7B7',
            tabBarButton: props => (
              <CustomTabBarButton
                onPress={() => navigation.navigate('Register Courses')}
                {...props}>
                <Image
                  source={assets.RegisterCoursesIcon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: -35,
                    fontSize: 11,
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: isFocused ? Colors.primaryGreen : '#B7B7B7',
                  }}>
                  Register Courses
                </Text>
              </CustomTabBarButton>
            ),
            headerShown: false,
          }}
          name="Register Courses"
          component={RegisterCourses}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="My Learning"
          component={MyLearning}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Payment"
          component={Payment}
        />
      </Tab.Navigator>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  customTabBarButtonView: {
    width: 62,
    height: 62,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    backgroundColor: Colors.primaryGreen,
  },
  customTabBarButtonContainer: {
    top: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
