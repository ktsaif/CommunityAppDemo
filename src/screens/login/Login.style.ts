//Styles for entry screen.
import {StyleSheet} from 'react-native';
import { fonts } from '../../assets';

export const loginStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 18,
    },
    titleText: {
        fontSize: 24,
        color: '#36393F',
        fontFamily: fonts.Bold,
    },
    boxContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subText: {
        fontSize: 15,
        color: '#36393F',
        fontFamily: fonts.Regular,
        maxWidth: '85%',
        paddingVertical: 10,
        textAlign: 'center',
    },
    subText2: {
        fontSize: 15,
        color: '#36393F',
        fontFamily: fonts.Medium,
        marginBottom: 10,
    },
    logButton: {
        width: '100%',
        backgroundColor: '#632407',
        borderRadius: 5,
        padding: 12,

    },
    logTextStyle: {
        color: '#FFF',
        fontFamily: fonts.Medium,
        fontSize: 15,
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginBottom: 15,
    },
    forgotStyle: {
        color: '#357DD2',
        fontFamily: fonts.Medium,
        fontSize: 14,
    },
  });
