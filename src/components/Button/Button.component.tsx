/**
 * @module Button Component
 * @desc Button component to trigger a range of actions.
 * ...
 */

import {
  Text,
  TextStyle,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';

interface Props {
  // The style for the entire button container.
  buttonContainer?: ViewStyle;
  // The text to be displayed inside the button.
  buttonText?: any;
  // The style for the text inside the button.
  textStyle?: TextStyle;
  // The callback function to be executed when the button is pressed.
  onPress?: () => void;
  // The boolean for show loading spinner.
  loading?: boolean;
  // The strign for spinner loading color.
  loadingColor?: string;
  disabled?: boolean;
}

const CustomButton = (props: Props) => {
  const styles = buttonStyles();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.Container, props.buttonContainer]}>
      {!props.loading ? (
        <Text style={[styles.buttonLabel, props.textStyle]}>
          {props.buttonText}
        </Text>
      ) : (
        <ActivityIndicator
          color={props.loadingColor ? props.loadingColor : '#000000'}
          size={10}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const buttonStyles = () =>
  StyleSheet.create({
    Container: {
      width: '97%',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
      elevation: 0.5,
    },
    buttonLabel: {
      alignSelf: 'center',
      padding: 0,
      color: '#000000',
      fontFamily: fonts.Medium,
      fontSize: 12,
    },
  });
