import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';

import KundaliScreen from '../screens/kundali/Kundali.screen';
import { Routes } from '../constants';


const RootNavigation = () => {
    const RootStack = createStackNavigator();
    const navigationRef = createNavigationContainerRef();

    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={Routes.KUNDALISCREEN}
            >
                <RootStack.Screen
                name={Routes.KUNDALISCREEN}
                component={KundaliScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
