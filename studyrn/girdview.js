/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/***
 * 九宮格布局
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity
} from 'react-native'

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

var bageData = require('../BadgeData');

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
//定义一些全局的变量
var clos = 3;
var boxW = 100;
var vMargin = (width - clos * boxW) / (clos + 1);
var hMargin = 15;

class GirdView extends Component {
    
    render() {
/*         alert(this.props.data.name)
        console.log("获取listview传过来的值"+this.props.data.money) */
        // alert(this.props.navigation.getParam('name'))
        console.log("获取listview传过来的值"+this.props.navigation.getParam('name'))//接收参
        return (
            <View style={styles.container}>
                {this.renderAllBage()}
            </View>);
    }

    renderAllBage() {
        //定义数组装所有的组件
        var allBage = [];
        //遍历json数据
        for (var i = 0; i < bageData.data.length; i++) {
            //取出单独的数据
            var bage = bageData.data[i]
            //直接装入数组
            allBage.push(
                <TouchableOpacity activeOpacity={0.5} onPress={()=>this.startFather()}>
                <View key={i} style={styles.outViewStyle}>
                    <Image source={{uri: bage.icon}} style={styles.imageStyle}/>
                    <Text style={styles.mainTitleStyle}>
                        {bage.title}
                    </Text>
                </View>
                </TouchableOpacity>
            );
        }
        return allBage;
    }

    startFather(e){
        this.props.navigation.navigate('Father')
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'blue',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    outViewStyle: {
        backgroundColor: 'green',
        alignItems: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin,
    },
    imageStyle: {
        width: 80,
        height: 80
    },
    mainTitleStyle: {}
});

export default GirdView;

