/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { registerStyle } from './Register.style';
import CustomTextInput from '../../components/TextInput/TextInput.component';
import { fonts } from '../../assets';


interface Props {
    onPressToggleButton: (option: string) => void;
    selectedOption: string;
}
export const LoginOption = (props: Props) => {
    const style = registerStyle();
    return (
        <View style={style.toggleCon}>
            <TouchableOpacity style={[style.toggleBox, {
                backgroundColor: props.selectedOption === 'email' ? '#828282' : '#d5d7d7'
            }]}
            onPress={() =>
                 props.onPressToggleButton('email')}>
                <Text style={[style.toggleText, {
                    color: props.selectedOption === 'email' ? '#FFFFFF' : '#000000'
                }]}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.toggleBox, {
                backgroundColor: props.selectedOption === 'phone' ? '#828282' : '#d5d7d7'
            }]} onPress={() =>
                 props.onPressToggleButton('phone')}>
                <Text style={[style.toggleText, {
                    color: props.selectedOption === 'phone' ? '#FFFFFF' : '#000000'
                }]}>Phone Number</Text>
            </TouchableOpacity>
        </View>
    );
};

export const EmailForm = () => {
    const style = registerStyle();
    const [email, setEmail] = useState('');
    return (
        <View style={style.boxContainer}>
            <Text style={style.subText2}>Email Address</Text>
            <CustomTextInput
                placeHolder={'Email'}
                value={email}
                setValue={setEmail}
                placeHolderColor={'#36393F'}
                input={{
                    color: '#000',
                    fontFamily: fonts.Regular,
                    height: 50,
                }}
            />
        </View>
    );
};


export const PhoneNumberForm = () => {
    const style = registerStyle();
    const [phone, setPhone] = useState('');
    return (
        <View style={style.boxContainer}>
            <Text style={style.subText2}>Phone Number</Text>
            <View style={style.phoneField}>
                <CustomTextInput
                    placeHolder={'Phone Number'}
                    value={phone}
                    setValue={setPhone}
                    placeHolderColor={'#36393F'}
                    input={{
                        color: '#000',
                        fontFamily: fonts.Regular,
                        height: 50,
                    }}
                    leftIcon={
                        <Text>+91</Text>
                    }
                />
            </View>
        </View>
    );
};
