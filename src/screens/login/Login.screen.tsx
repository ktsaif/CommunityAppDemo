/**
 * LoginScreen.tsx
 * @module Login Screen
 * @desc The login screen for the application.
 * @version 1.0.0
 * @author Saifali
 * @license All rights reserved.
 * ...
 */

import React from 'react';
import {loginStyle} from './Login.style';
import {ImageBackground, Text, View} from 'react-native';
import {images } from '../../assets';
import Header from '../../components/Header/Header.component';
import { LoginForm } from './Login.component';

/**
 * Login screen component.
 * @returns {JSX.Element}
 */

const LoginScreen = () => {
  const style = loginStyle();
  try {
    return (
        <ImageBackground source={images.Bg} style={style.container}>
            <Header arrow title={'Back'} />
            <View style={style.innerContainer}>
                <View style={style.boxContainer}>
                    <Text style={style.titleText}>Welcome Back!</Text>
                    <Text style={style.subText}>
                    Log in with your email Id or phone number to enter.
                    </Text>
                </View>
                <LoginForm />
            </View>
        </ImageBackground>
    );
  } catch (error) {
    //Handle error
    console.log('Error in entry screen', error);
  }
};

export default LoginScreen;
