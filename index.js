/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//引入外部资源
import LoginView from './studyrn/loginView';
import ViewPageScollView from './studyrn/viewPageScrollView';
import GirdView from './studyrn/girdview';

//Es5的引入外部布局
// var LoginView = require('./studyrn/loginView');

class include extends Component {
    render() {
        return (
            // <LoginView/>
            <ViewPageScollView/>//GirdView页面
            //<GirdView/>//滑动页面
        );
    }
}
// appName 为原生中的getName 中return的值
AppRegistry.registerComponent(appName, () => include);

