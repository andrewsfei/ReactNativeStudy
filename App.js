/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import HomeScreen from "./index";
import LISTScreen from "./studyrn/listview";
import GIRDScreen from "./studyrn/girdview";
import FATHER from './studyrn/Father'
// export default NativeModules.SplashScreen;
const RootStack = createStackNavigator({


    Home: {
        screen: LISTScreen,
    },
    Gird: {
        screen: GIRDScreen,
    },
    Father: {
        screen: FATHER
    }
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});
//修改前
// export default createAppContainer(RootStack );
//修改后
const App = createAppContainer(RootStack);
export default App


