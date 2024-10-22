import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import EntryScreen from '../screens/entry/Entry.screen';
import RegisterScreen from '../screens/register/Register.screen';
import LoginScreen from '../screens/login/Login.screen';
import { Routes } from '../constants';
import { navigationRef } from './useNavigation';


const RootNavigation = () => {
    const RootStack = createStackNavigator();
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={Routes.ENTRYSCREEN}
            >
                <RootStack.Screen
                name={Routes.ENTRYSCREEN}
                component={EntryScreen}
                />
                <RootStack.Screen
                name={Routes.LOGINSCREEN}
                component={LoginScreen}
                />
                <RootStack.Screen
                name={Routes.REGISTERSCREEN}
                component={RegisterScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
