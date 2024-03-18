import React, {createContext, useContext, useState} from 'react';
import {ActivityIndicator, Modal, View, StyleSheet} from 'react-native';
import {Colors} from '../contants/themes';

const LoadingContext = createContext();

export const LoadingProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{showLoading, hideLoading}}>
      {children}
      <LoadingModal visible={isLoading} />
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};

const LoadingModal = ({visible}: any) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.primaryGreen} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
