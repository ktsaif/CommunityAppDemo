//Styles for entry screen.
import {StyleSheet} from 'react-native';
import { fonts } from '../../assets';

export const registerStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    titleText: {
        fontSize: 24,
        color: '#36393F',
        fontFamily: fonts.Bold,
        textAlign: 'center',
    },
    boxContainer: {
        marginVertical: 15,
    },
    toggleCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d5d7d7',
        padding: 4,
        borderRadius: 5,
        marginTop: 15,
    },
    toggleBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        paddingVertical: 3,
        borderRadius: 5,
    },
    toggleText: {
        fontFamily: fonts.Medium,
        fontSize: 15,
    },
    subText2: {
        fontSize: 15,
        color: '#36393F',
        fontFamily: fonts.Medium,
        marginBottom: 10,
    },
    regButton: {
        width: '100%',
        backgroundColor: '#632407',
        borderRadius: 5,
        padding: 12,

    },
    regTextStyle: {
        color: '#FFF',
        fontFamily: fonts.Medium,
        fontSize: 15,
    },
    policyButton: {
        marginBottom: 8,
    },
    policyStyle: {
        color: '#357DD2',
        fontFamily: fonts.Medium,
        fontSize: 14,
    },
    phoneField: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
  });
