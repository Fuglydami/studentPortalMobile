import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './header';
import DrawerSceneWrapper from './drawerSceneWrapper';
import {Colors} from '../contants/themes';

const Container = ({children, backgroundColor}: any) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Header />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
});

export default Container;
