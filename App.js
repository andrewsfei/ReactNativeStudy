/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import HomeScreen from "./index";
import LISTScreen from "./studyrn/listview";
import GIRDScreen from "./studyrn/girdview";
import FATHER from './studyrn/Father'

const AppNavigator = createStackNavigator({
    Home: {
        screen: LISTScreen,
    },
    Gird: {
        screen: GIRDScreen,
    },
    Father:{
        screen:FATHER
    }
}, {
        initialRouteName: 'Home',
    });
    
export default createAppContainer(AppNavigator);
