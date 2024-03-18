import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './tabNavigator';
import DrawerContent from '../../component/DrawerContent';
import {Colors} from '../themes';
import {KeyboardAvoidingView, Platform} from 'react-native';
import DrawerSceneWrapper from '../../component/drawerSceneWrapper';
import {useGlobalContext} from '../../hooks/useGlobalContext';

const Drawer = createDrawerNavigator();

const theme = {
  colors: {
    ...DefaultTheme.colors,
    background: '#F8F8F4',
  },
};

const HomeNavigator: React.FC = ({navigation}: any) => {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor: Colors.primaryGreen,
            width: '60%',
          },
          sceneContainerStyle: {
            backgroundColor: Colors.primaryGreen,
          },
        }}
        drawerType="slide"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{headerShown: false}}
          component={TabNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
