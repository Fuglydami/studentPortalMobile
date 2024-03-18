import React from 'react';
import {useGlobalContext} from '../hooks/useGlobalContext';
import HomeNavigator from '../contants/routes/homeNavigator';
import AuthNavigator from '../contants/routes/authNavigator';

const Navigation = () => {
  const {userData} = useGlobalContext();
  return <>{userData ? <HomeNavigator /> : <AuthNavigator />}</>;
};

export default Navigation;
