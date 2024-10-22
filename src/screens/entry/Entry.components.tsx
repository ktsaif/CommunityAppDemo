/**
 * @module Entry Screen components
 * @desc
 */

import React from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from 'react-native';
import {entryStyle} from './Entry.style';
import {images} from '../../assets/index';
import CustomButton from '../../components/Button/Button.component';
import { navigate } from '../../routes/useNavigation';
import { Routes } from '../../constants';

/**
 * Entry screen components.
 * @returns {JSX.Element}
 */

export const OnBoardingFrame = () => {
  const style = entryStyle();
  return (
    <ImageBackground style={style.frameCon} source={images.Bg}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Image source={images.Frame1} style={style.imgStyle} />
      <Image source={images.Frame2} />
    </ImageBackground>
  );
};

export const ButtonContainer = () => {
  const style = entryStyle();
  const navigateToRegister = () => {
    navigate(Routes.REGISTERSCREEN);
  }
  const navigateToLogin = () => {
    navigate(Routes.LOGINSCREEN);
  }
  return (
    <View style={style.butCon}>
      <Text style={style.titleText}>Welcome to Orgface</Text>
      <Text style={style.subText}>
        Enjoy the new experience of chatting in organization{' '}
      </Text>
      <CustomButton
        buttonText={'Register'}
        buttonContainer={style.regButton}
        textStyle={style.regTextStyle}
        onPress={navigateToRegister}
      />
      <CustomButton
        buttonText={'Login'}
        buttonContainer={style.logButton}
        textStyle={style.logTextStyle}
        onPress={navigateToLogin}
      />
    </View>
  );
};
