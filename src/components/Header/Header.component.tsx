/**
 * @module Header Component
 * @desc Common header component for all screen with props
 */

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {fonts, images,} from '../../assets';
import { goBack } from '../../routes/useNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  // An optional header title string.
  title?: string | any;
  // An optional boolean to display logo in header.
  logo?: boolean;
  // An optional boolean to give go back button.
  arrow?: boolean;
}

const Header = (props: Props) => {
  const styles = headerStyles();
  return (
    <SafeAreaView>
        <View style={[styles.container]}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor="transparent"
                translucent={true}
            />
            <TouchableOpacity onPress={goBack} style={styles.titleContainer}>
            {props.arrow ? (
                <Image source={images.BackArrow} />
            ) : null}
            {props.title ? (
                <Text
                    style={styles.title}>
                    {props.title}
                </Text>
            ) : null}
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
};

export default Header;

const headerStyles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      color: '#1E1E1E',
      fontFamily: fonts.Regular,
      fontSize: 15,
      alignSelf: 'center',
      marginLeft: 5,
    },
    arrowCon: {width: '7%', alignItems: 'center', justifyContent: 'center'},
  });
