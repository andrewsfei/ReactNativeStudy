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
    Image
} from 'react-native'

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
                <View key={i} style={styles.outViewStyle}>
                    <Image source={{uri: bage.icon}} style={styles.imageStyle}/>
                    <Text style={styles.mainTitleStyle}>
                        {bage.title}
                    </Text>
                </View>
            );
        }
        return allBage;
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

