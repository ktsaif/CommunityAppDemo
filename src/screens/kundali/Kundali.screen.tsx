/**
 * @module Kundali Screen
 * @desc The main screen displayed when the user launches the application.
 * @version 1.0.0
 * @author Saifali
 * @license All rights reserved.
 */

import React, { useState } from 'react';
import { AnimatedBackground, Header, KundaliDetails, PlanetSection, KundaliChart } from './Kundali.components';
import { ScrollView } from 'react-native';
import { kundaliStyle } from './Kundali.style';

/**
 * Kundali screen component.
 * @returns {JSX.Element} - The Kundali screen.
 */

const KundaliScreen = () => {
  const styles = kundaliStyle();
  const [activeTab, setActiveTab] = useState('Chart');
  return (
    <AnimatedBackground>
        <>
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <ScrollView contentContainerStyle={styles.scrollCon}>
            <KundaliChart />
            <PlanetSection />
            <KundaliDetails />
          </ScrollView>
        </>
    </AnimatedBackground>
  );
};

export default KundaliScreen;
