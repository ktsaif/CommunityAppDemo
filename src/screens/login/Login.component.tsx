
import React, { useState } from 'react';
import { loginStyle } from './Login.style';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../../components/TextInput/TextInput.component';
import { fonts, images } from '../../assets';
import CustomButton from '../../components/Button/Button.component';

export const LoginForm = () => {
    const style = loginStyle();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
        // TODO: Implement login logic here
        console.log('Login clicked');
    };
    return (
        <View>
        <Text style={style.subText2}>Account Information</Text>
        <CustomTextInput
            placeHolder={'Email or Phone Number'}
            value={email}
            setValue={setEmail}
            placeHolderColor={'#36393F'}
            input={{
                color: '#000',
                fontFamily: fonts.Regular,
                height: 50,
            }}
        />
        <CustomTextInput
            placeHolder={'Password'}
            value={password}
            setValue={setPassword}
            placeHolderColor={'#36393F'}
            input={{
                color: '#000',
                fontFamily: fonts.Regular,
                height: 50,
            }}
            rightIcon={
                <Image source={images.EyeFill} />
            }
        />
        <TouchableOpacity style={style.forgotButton}>
            <Text style={style.forgotStyle}>Forgot your password?</Text>
        </TouchableOpacity>
        <CustomButton
            buttonText={'Login'}
            buttonContainer={style.logButton}
            textStyle={style.logTextStyle}
            onPress={login}
        />
    </View>
    );
};