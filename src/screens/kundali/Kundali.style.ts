//Styles for kundali screen.
import {StyleSheet} from 'react-native';
import { Colors } from '../../constants';
import { fonts } from '../../assets';

export const kundaliStyle = () =>
  StyleSheet.create({
    //Animated bg
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: Colors.BGPRIMARY,
      },
      circle: {
        position: 'absolute',
        top: -250, // Adjust for the larger radius
        left: '50%',
        marginLeft: -250, // Adjust for half width to center it
        opacity: 0.8,
      },

    //Header
    headerContainer: {
        paddingHorizontal: 17,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        overflow: 'hidden',
        backgroundColor: Colors.GLASSMRPH,
      },
      titleCon: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      backButton: {
        alignSelf: 'flex-start',
      },
      title: {
        fontSize: 17,
        fontFamily: fonts.Regular,
        color: Colors.TEXTCOLOR,
        marginLeft: 15,
      },
      tabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
      },
      tab: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      tabText: {
        fontSize: 14,
      },
      selectedTab: {
        fontFamily: fonts.Bold,
        color: Colors.TEXTCOLOR,
      },
      unselectedTab: {
        fontFamily: fonts.Light,
        color: Colors.TEXTCOLOR,
        opacity: 0.8,
      },
      separator: {
        fontSize: 16,
        color: Colors.TEXTCOLOR,
        fontFamily: fonts.Light,
      },

      //Scrollview
      scrollCon: {
        margin: 20,
        flexGrow: 1,
        paddingBottom: 40,
      },
      detailsCon: {
        marginTop: 20,
      },
      detailsTitle: {
        color: Colors.TEXTCOLOR,
        fontSize: 15,
        fontFamily: fonts.Medium,
        marginBottom: 10,
      },

      //Table
      tableContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: Colors.GLASSMRPH,
        marginTop: 15,
      },
      tableRow: {
        flexDirection: 'row',
      },
      tableHeader: {
        fontFamily: fonts.Regular,
        color: Colors.TEXTCOLOR,
        fontSize: 12,
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: Colors.GLASSMRPH,
        paddingVertical: 8,
      },
      tableCell: {
        flex: 1,
        fontFamily: fonts.Regular,
        color: Colors.TEXTCOLOR,
        fontSize: 11,
        textAlign: 'center',
        borderRightWidth: 0.8,
        borderRightColor: 'rgba(255, 255, 255, 0.3)',

        paddingVertical: 8,
      },
      // Remove borderRight for the last column in each row
      lastColumn: {
        borderRightWidth: 0,
      },
      glassMorphism: {
        borderRadius: 10,
        backgroundColor: Colors.GLASSMRPH,
        overflow: 'hidden',
      },
      chartCon: {flex: 1},
  });
