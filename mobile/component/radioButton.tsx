import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../contants/themes';

const CustomRadioButton = ({isSelected, handleToggle}: any) => {
  return (
    <View style={styles.radioButton}>
      <Pressable onPress={handleToggle}>
        <View style={[styles.radioCircle]}>
          <View
            style={[
              styles.radioSecondCircle,
              {
                backgroundColor: isSelected ? Colors.primaryGreen : 'white',
              },
            ]}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.primaryGreen,
    marginRight: 8,
  },
  radioSecondCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export default CustomRadioButton;
