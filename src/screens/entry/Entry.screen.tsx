/**
 * EntryScreen.tsx
 * @module Entry Screen
 * @desc The first screen the user sees when launching the application.
 * @version 1.0.0
 * @author Saifali
 * @license All rights reserved.
 * ...
 */

import React from 'react';
import {entryStyle} from './Entry.style';
import {View} from 'react-native';
import { ButtonContainer, OnBoardingFrame } from './Entry.components';

/**
 * Entry screen component.
 * @returns {JSX.Element}
 */

const EntryScreen = () => {
  const style = entryStyle();
  try {
    return (
      <View style={style.container}>
        <OnBoardingFrame />
        <ButtonContainer />
      </View>
    );
  } catch (error) {
    //Handle error
    console.log('Error in entry screen', error);
  }
};

export default EntryScreen;
