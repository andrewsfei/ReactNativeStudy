/**
 * @format
 */

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import React, { Component,NativeModules } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App.js'
//引入外部资源
import LoginView from './studyrn/loginView';
import ViewPageScollView from './studyrn/viewPageScrollView';
import GirdView from './studyrn/girdview';
import FlatLists from './studyrn/listview';
import SplashScreen from 'react-native-splash-screen'
//Es5的引入外部布局
// var LoginView = require('./studyrn/loginView');



class include extends Component {

    render() {

        return (
            // <LoginView/>
            //<ViewPageScollView/>//GirdView页面
            //<GirdView/>//滑动页面
            <FlatLists />//ListView页面
        );
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

}

// appName 为原生中的getName 中return的值
AppRegistry.registerComponent(appName, () => App);

