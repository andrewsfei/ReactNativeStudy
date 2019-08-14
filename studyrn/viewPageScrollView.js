/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/***
 * ScollView布局（相当于viewpage）
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Platform,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var dimensions = require('Dimensions')
var { width, height } = dimensions.get('window')
//引入json数据
import ImageData from '../ImageData'

// var ImageData = require('../ImageData');

class viewPageScrollView extends Component {
    //不可改变的值ES5的写法
    /*            getDefaultProps() {
                    return {
                        name: '王麻子',
                    }
                }*/

    //Es6不可改变的写法
    /*    static defaultProps = {
            name: '王麻子',
            sex: 'man',
            tel: '13866666666'
        }*/

    //可以改变的值ES5的写法(废弃了)
    /*        getInitialState() {
                return {
                    title: '不透明触摸',
                    person: '张三'
                }
            }*/

    //以改变的值Es6的写法
    /*    constructor(props) {
            super(props);
            this.state = {
                title: '不透明触摸',
                person: '张三'
            }
        }*/

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                >
                    {/*第一种写法*/}
                    {/*                    {this.renderAllImage()}*/}
                    {/*另一种写法*/}
                    {this.renderAllImage().map((item) => {
                        return item
                    }
                    )}
                </ScrollView>
            </View>

        );
    }

    //返回所有的图片
    renderAllImage() {
        //定义一个数组
        var allImage = [];
        //拿到图片数组
        var imageArr = ImageData.data;
        console.log("Json数据" + imageArr)
        //遍历
        for (var i = 0; i < imageArr.length; i++) {
            //取出单独的每一个对象
            var imageItem = imageArr[i];
            //创建组件装入数组
            allImage.push(
                <Image key={i} source={{ uri: imageItem.img }} style={{ width: width, height: 120 }} />
            );
        }
        //返回数组
        return allImage;

    };

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
});

export default viewPageScrollView;
