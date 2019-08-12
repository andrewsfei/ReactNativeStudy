/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import LoginView from './studyrn/loginView';
import {name as appName} from './app.json';

//Es5的引入外部布局
// var LoginView = require('./studyrn/loginView');

class login extends Component {

    render() {
        return (
            <LoginView/>
        );
    }
}
// appName 为原生中的getName 中return的值
AppRegistry.registerComponent(appName, () => LoginView);

