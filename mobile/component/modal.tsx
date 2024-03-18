import React, {ReactNode} from 'react';
import {View, Modal, StyleSheet, Image, Pressable} from 'react-native';
import assets from '../contants/assets';
import {Colors} from '../contants/themes';

interface CustomModalProps {
  toggleModal: () => void;
  isModalVisible: boolean;

  children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isModalVisible,
  toggleModal,
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable onPress={toggleModal} style={styles.closeIcon}>
            <Image source={assets.closeIcon} resizeMode="contain" />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,

    justifyContent: 'flex-start',
    borderRadius: 50,
    width: 30,
    alignItems: 'center',
    backgroundColor: Colors.primaryGrey,
  },
  modalContainer: {
    flex: 1,
    padding: 20,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 55,
    borderRadius: 24,
    elevation: 5,
  },
});

export default CustomModal;
