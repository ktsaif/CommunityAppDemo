/**
 * @module TextIput Component
 * ...
 */

import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {fonts} from '../../assets';
  import {KeyboardType, InputModeOptions} from 'react-native';

  interface Props {
    leftIcon?: any | undefined;
    rightIcon?: any | undefined;
    placeHolder?: any;
    value?: string;
    keyboard?: KeyboardType;
    inputMode?: InputModeOptions;
    errMsg?: any;
    setValue?: (value: string) => void;
    onFocus?: () => void;
    onPressIn?: () => void;
    onContentSizeChange?: () => void;
    multiline?: boolean;
    scrollEnabled?: boolean;
    editable?: boolean;
    autoCapitalize?: string;
    container?: any;
    input?: any;
    placeHolderColor?: any;
    onPressRightIcon?: () => void;
  }

  const CustomTextInput = (props: Props) => {
    const styles = inputStyles();
    return (
      <>
        <View style={props.container ? props.container : styles.container}>
          {props.leftIcon ? (
            <View style={styles.icon}>{props.leftIcon}</View>
          ) : null}
          <TextInput
            value={props.value}
            onChangeText={props.setValue}
            placeholder={props.placeHolder}
            style={[styles.input, props.input]}
            placeholderTextColor={'#000'}
            keyboardType={props.keyboard}
            inputMode={props.inputMode}
            onFocus={props.onFocus}
            onPressIn={props.onPressIn}
            onContentSizeChange={props.onContentSizeChange}
            multiline={props.multiline}
            scrollEnabled={props.scrollEnabled}
            numberOfLines={3}
            editable={props.editable}
            autoCapitalize={'none'}
          />
          <View />
          {props.rightIcon ? (
            <TouchableOpacity
              style={styles.verify}
              onPress={props.onPressRightIcon}>
              {props.rightIcon}
            </TouchableOpacity>
          ) : null}
        </View>
        {props.errMsg ? (
          <Text style={styles.error} numberOfLines={1}>
            {props.errMsg}
          </Text>
        ) : null}
      </>
    );
  };

  export default CustomTextInput;

  const inputStyles = () =>
    StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d5d7d7',
        width: '100%',
        marginBottom: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
      },
      input: {
        width: '85%',
        fontFamily: fonts.Regular,
        color: 'green',
        fontSize: 13,
      },
      icon: {width: '10%', justifyContent: 'center', alignItems: 'center'},
      verify: {width: '10%', justifyContent: 'center', alignItems: 'center'},
      error: {
        color: 'blue',
        fontFamily: fonts.Regular,
        maxWidth: '80%',
        alignSelf: 'flex-start',
        paddingTop: 8,
        fontSize: 15,
      },
    });
