import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {ScreenType} from '../types';
import ForgetPassword from '../../pages/auth/forgetPassword';

import CarouselComponent from '../../pages/carousel';
import LogoHeader from '../../component/logoHeader';
import {LoadingProvider} from '../../hooks/loadingContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../pages/auth/login';
import {useGlobalContext} from '../../hooks/useGlobalContext';

const screens: ScreenType = [
  {
    options: {headerShown: false},
    name: 'CarouselComponent',
    component: CarouselComponent,
  },

  {
    options: {
      headerShown: true,
      headerStyle: {
        marginTop: 16,
      },
      headerTitle: props => <LogoHeader {...props} />,
      headerTitleAlign: 'center',
      headerTransparent: true,
    },

    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    options: {headerShown: false},
    name: 'Login',
    component: Login,
  },
];

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const AuthNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <LoadingProvider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="CarouselComponent">
            {screens.map(screenData => {
              const {options, name, component} = screenData;
              return (
                <Stack.Screen
                  key={name}
                  options={options}
                  name={name}
                  component={component}
                />
              );
            })}
          </Stack.Navigator>
        </SafeAreaView>
      </LoadingProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthNavigator;
