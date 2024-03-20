import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './header';
import {Colors} from '../contants/themes';

const Container = ({children, backgroundColor, notification}: any) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Header notification={notification} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
