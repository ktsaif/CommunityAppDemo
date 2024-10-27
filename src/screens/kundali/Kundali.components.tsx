/**
 * @module Kundali Screen components
 * @desc Contains the animated background component for the Kundali screen.
 */

import React, {useEffect, useState} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {fonts, images} from '../../assets';
import {kundaliStyle} from './Kundali.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  DetailsOptions,
  kundaliChartData,
  kundaliData,
  PlanetData,
  PlanetOptions,
  TABS,
} from '../../constants';
import {ToggleSelector} from '../../components/ToggleSelector/ToggleSelector.components';
import KundaliCard from '../../components/KundaliDetailsCard/Card.components';
import Svg, {
  Text as SvgText,
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/**
 * Animated background for the Kundali screen.
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.children - Child components.
 * @returns {JSX.Element}
 */
export const AnimatedBackground = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const styles = kundaliStyle();

  // Define a shared value for rotation animations
  const angleAnim = useSharedValue(0); // Single shared value for both circles

  // Start the rotation animation
  useEffect(() => {
    angleAnim.value = withRepeat(
      withTiming(1, {duration: 15000, easing: Easing.linear}),
      Infinity,
      false,
    );
  }, [angleAnim]);

  // Calculate the position for the top rotating circle
  const animatedStyle1 = useAnimatedStyle(() => {
    const angle = angleAnim.value * Math.PI * 2; // Convert to radians
    const radius = 400; // Radius for the orbit

    // Calculate position for the top circle
    const x = Math.cos(angle) * radius; // Horizontal movement
    const y = Math.sin(angle) * radius; // Vertical movement

    return {
      transform: [{translateX: x}, {translateY: -y}], // Move upward
      position: 'absolute',
      left: '50%', // Center horizontally
      top: '50%', // Center vertically
      marginLeft: -250, // Center the circle (adjust width accordingly)
      marginTop: -250, // Center the circle (adjust height accordingly)
    };
  });

  // Calculate the position for the bottom rotating circle
  const animatedStyle2 = useAnimatedStyle(() => {
    const angle = angleAnim.value * Math.PI * 2; // Same angle for both circles
    const radius = 400; // Radius for the orbit

    // Calculate position for the bottom circle with a 180-degree offset
    const x = Math.cos(angle) * radius; // Horizontal movement
    const y = Math.sin(angle) * radius; // Vertical movement

    return {
      transform: [{translateX: -x}, {translateY: y}], // Move downward
      position: 'absolute',
      left: '50%', // Center horizontally
      top: '50%', // Center vertically
      marginLeft: -250, // Center the circle (adjust width accordingly)
      marginTop: -250, // Center the circle (adjust height accordingly)
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View style={[animatedStyle1]}>
        <images.Ellipse69 width="500" height="500" />
      </Animated.View>
      <Animated.View style={[animatedStyle2]}>
        <images.Ellipse69 width="500" height="500" />
      </Animated.View>
      {children}
    </View>
  );
};

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({activeTab, setActiveTab}) => {
  const styles = kundaliStyle();
  return (
    <View style={styles.headerContainer}>
      <SafeAreaView>
        <View style={styles.titleCon}>
          <TouchableOpacity style={styles.backButton}>
            <images.Vector width={10} height={22} />
          </TouchableOpacity>
          <Text style={styles.title}>Kundali</Text>
        </View>
        <View style={styles.tabsContainer}>
          {TABS.map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={styles.tab}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab ? styles.selectedTab : styles.unselectedTab,
                ]}>
                {tab}
              </Text>
              {tab !== TABS[TABS.length - 1] && (
                <Text style={styles.separator}> | </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

/**
 * PlanetTable component to display planetary information in a table format.
 * @returns {JSX.Element} - The table component.
 */
export const PlanetTable = () => {
  const styles = kundaliStyle();

  return (
    <View style={[styles.tableContainer, styles.glassMorphism]}>
      {/* Table Header */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableHeader, styles.tableCell]}>Planet</Text>
        <Text style={[styles.tableHeader, styles.tableCell]}>Sign</Text>
        <Text style={[styles.tableHeader, styles.tableCell]}>Sign Lord</Text>
        <Text style={[styles.tableHeader, styles.tableCell]}>Degree</Text>
        <Text style={[styles.tableHeader, styles.tableCell, styles.lastColumn]}>
          House
        </Text>
      </View>

      {/* Table Data Rows */}
      {PlanetData.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={[styles.tableCell]}>{item.planet}</Text>
          <Text style={[styles.tableCell]}>{item.sign}</Text>
          <Text style={[styles.tableCell]}>{item.lord}</Text>
          <Text style={[styles.tableCell]}>{item.degree}</Text>
          <Text style={[styles.tableCell, styles.lastColumn]}>
            {item.house}
          </Text>
        </View>
      ))}
    </View>
  );
};

export const PlanetSection = () => {
  const styles = kundaliStyle();
  const [selectedOption, setSelectedOption] = useState('Nakshatra');

  return (
    <View style={styles.detailsCon}>
      <Text style={styles.detailsTitle}>Planets</Text>
      <ToggleSelector
        options={PlanetOptions}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <PlanetTable />
    </View>
  );
};

export const KundaliDetails = () => {
  const styles = kundaliStyle();
  const [selectedOption, setSelectedOption] = useState('General');

  return (
    <View style={styles.detailsCon}>
      <Text style={styles.detailsTitle}>Understanding your Kundli</Text>
      <ToggleSelector
        options={DetailsOptions}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      {kundaliData.map((data, index) => (
        <KundaliCard
          key={index}
          title={data.title}
          description={data.description}
        />
      ))}
    </View>
  );
};

//Kundali Chart
export const KundaliChart = () => {
  const styles = kundaliStyle();
  return (
    <View style={styles.chartCon}>
      <Svg width={353} height={220} viewBox="0 0 379 236" fill="none">
        <G>
          <Rect
            width="379"
            height="236"
            rx="16"
            fill="url(#paint0_linear_1_73)"
          />
          <Rect
            x="1"
            y="1"
            width="377"
            height="234"
            rx="15"
            stroke="white"
            strokeWidth={1.2}
          />
        </G>
        <Path
          d="M188.5 2V23.5M188.5 23.5C247.5 67.5 284.9 32.4 302.5 54C325.5 76 297 97.5 341.5 119.5C293.5 139.5 324.5 170.7 302.5 183.5C270 206.5 244 169 188.5 214C142.5 172.5 104.9 200.7 76.5 183.5C55 170.479 81.5 135.5 39 119.5C84 97 51 76.5 76.5 54C102 31.5 134.5 67.5 188.5 23.5Z"
          stroke="white"
        />
        <Path d="M340 119H376.5" stroke="white" />
        <Path d="M40 119.5H2.5" stroke="white" />
        <Path d="M188.5 212.5V231.5" stroke="white" />
        <Path d="M373.5 6.5L5 228.5" stroke="white" />
        <Path d="M5.5 9L374.5 228.5" stroke="white" />
        <Defs>
          <LinearGradient
            id="paint0_linear_1_73"
            x1="-97.6804"
            y1="35.7574"
            x2="253.353"
            y2="387.123"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="white" stopOpacity={0.08} />
            <Stop offset="1" stopColor="white" stopOpacity={0.1} />
          </LinearGradient>
        </Defs>

        {kundaliChartData.map(house => {
          return (
            <React.Fragment key={house.houseNumber}>
              <SvgText
                x={house.houseNumberPosition?.x}
                y={house.houseNumberPosition?.y}
                fill="white"
                fontSize="15"
                textAnchor="middle"
                fontFamily={fonts.Medium}
                alignmentBaseline="middle">
                {house.houseNumber}
              </SvgText>
              {house.value ? (
                <SvgText
                  x={house.valuePosition?.x}
                  y={house.valuePosition?.y}
                  fill="white"
                  fontSize="14"
                  textAnchor="middle"
                  alignmentBaseline="middle">
                  {house.value}
                </SvgText>
              ) : null}
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
};
