import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {Colors} from '../contants/themes';

interface CustomButtonProps {
  title?: string;
  fontSize?: number | string;
  width?: string | string;
  disable?: boolean;
  onPress: () => any;
  buttonColor?: string;
  textColor?: string;
  position?: 'absolute' | 'relative' | 'fixed';
  bottom?: number;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  borderRadius?: number | string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonColor = Colors.primaryGreen,
  textColor = '#fff',
  position,
  bottom,
  disable = false,
  paddingHorizontal = 20,
  paddingVertical = 17,
  fontSize = 18,
  borderRadius = 10,
  width,
}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: borderRadius,
        backgroundColor: disable ? Colors.accentGrey : buttonColor,
        position: position,
        bottom: bottom,
        width: width,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
      }}
      onPress={disable || onPress}>
      <Text style={[styles.buttonText, {color: textColor, fontSize: fontSize}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
  },
});

export default CustomButton;
