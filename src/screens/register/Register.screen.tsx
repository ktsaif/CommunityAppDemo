/**
 * RegisterScreen.tsx
 * @module Login Screen
 * @desc The login screen for the application.
 * @version 1.0.0
 * @author Saifali
 * @license All rights reserved.
 * ...
 */

import React, { useState } from 'react';
import {registerStyle} from './Register.style';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Header.component';
import { images } from '../../assets';
import { EmailForm, LoginOption, PhoneNumberForm } from './Register.component';
import CustomButton from '../../components/Button/Button.component';

/**
 * Register screen component.
 * @returns {JSX.Element}
 */

const RegisterScreen = () => {
  const style = registerStyle();
  const [selected, setSelected] = useState('email');
  const onClickToggle = (option: string) => {
    setSelected(option);
  };
  const register = () => {
    // TODO: Implement registration logic here
    console.log('Register clicked');
  }
  try {
    return (
      <ImageBackground source={images.Bg} style={style.container}>
        <Header arrow title={'Back'} />
        <View style={style.innerContainer}>
            <View style={style.boxContainer}>
                <Text style={style.titleText}>Enter email or phone</Text>
                <LoginOption onPressToggleButton={onClickToggle}  selectedOption={selected}/>
            </View>
            {
                selected === 'email' ? <EmailForm /> : <PhoneNumberForm />
            }
            <TouchableOpacity style={style.policyButton}>
                <Text style={style.policyStyle}>View our Privacy policy</Text>
            </TouchableOpacity>
            <CustomButton
                buttonText={'Next'}
                buttonContainer={style.regButton}
                textStyle={style.regTextStyle}
                onPress={register}
            />
        </View>
      </ImageBackground>
    );
  } catch (error) {
    //Handle error
    console.log('Error in entry screen', error);
  }
};

export default RegisterScreen;