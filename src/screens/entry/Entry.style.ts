//Styles for entry screen.
import {StyleSheet} from 'react-native';
import { fonts } from '../../assets';

export const entryStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    frameCon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    butCon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    imgStyle: {
        marginBottom: 10,
    },
    titleText: {
        fontSize: 24,
        color: '#36393F',
        fontFamily: fonts.Bold,
    },
    subText: {
        fontSize: 14,
        color: '#36393F',
        fontFamily: fonts.Light,
        maxWidth: '85%',
        textAlign: 'center',
        paddingVertical: 10,
    },
    regButton: {
        width: '90%',
        backgroundColor: '#632407',
        borderRadius: 5,
        padding: 12,

    },
    regTextStyle: {
        color: '#FFF',
        fontFamily: fonts.Medium,
        fontSize: 15,
    },
    logButton: {
        width: '90%',
        borderColor: '#632407',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,

    },
    logTextStyle: {
        color: '#632407',
        fontFamily: fonts.Medium,
        fontSize: 15,
    },
  });
