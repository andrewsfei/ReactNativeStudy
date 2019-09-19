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

var dimensions = require('Dimensions');
var { width, height } = dimensions.get('window');
//引入json数据
import ImageData from '../ImageData'
// var ImageData = require('../ImageData');
//引入计时器类库
//var TimerMixin = require('react-timer-mixin');
import TimerMixin from 'react-timer-mixin'

class viewPageScrollView extends Component {
    //注册定时器
    // mixins: [TimerMixin]
    //不可改变的值ES5的写法
    /*            getDefaultProps() {
                    return {
                        name: '王麻子',
                    }
                }*/

    //Es6不可改变的写法
    static defaultProps = {
        duration: 1000,
        // name: '王麻子',
        // sex: 'man',
        // tel: '13866666666'
    }

    //可以改变的值ES5的写法(废弃了)
    /*        getInitialState() {
                return {
                    title: '不透明触摸',
                    person: '张三'
                }
            }*/

    //以改变的值Es6的写法
    constructor(props) {
        super(props);
        this.state = {
            //当前页码
            currentPage: 0,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref='scrollView'
                    horizontal={true}
                    /* 隐藏水平滚动条 */
                    showsHorizontalScrollIndicator={false}
                    /* 自动分页 */
                    pagingEnabled={true}
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    //开始拖拽的时候
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    //停止拖拽的时候
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {/*第一种写法*/}
                    {/*                    {this.renderAllImage()}*/}
                    {/*另一种写法*/}
                    {this.renderAllImage().map((item) => {
                        return item
                    }
                    )}
                </ScrollView>
                {/*返回指示器 */}
                <View style={styles.pageViewStyle}>
                    {/* 返回五个点 */}

                    {this.rendetPoint()}
                </View>
            </View>

        );
    }
    //调用开始拖拽
    onScrollBeginDrag() {
        //停止定时器(this.timer 为下边隐式的全局)
        clearInterval(this.timer);
    }
    //调用结束拖拽
    onScrollEndDrag() {
        this.startTimer();
    }

    /* 实现一些复杂的操作 */
    componentDidMount() {
        //开启定时器
        this.startTimer();

    }


    startTimer() {
        // 1. 拿到scrollView
        var scrollView = this.refs.scrollView;
        var imgCount = ImageData.data.length;

        // 2.添加定时器  this.timer --->可以理解成一个隐式的全局变量
        this.timer = setInterval(function () {
            // 2.1 设置圆点
            var activePage = 0;
            // 2.2 判断
            if ((this.state.currentPage + 1) >= imgCount) { // 越界
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1;
            }

            // 2.3 更新状态机
            this.setState({
                currentPage: activePage
            });

            // 2.4 让scrollView滚动起来
            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({ x: offsetX, y: 0, animated: true });

        }, this.props.duration);

    }

    //返回所有的图片
    renderAllImage() {
        //定义一个数组
        var allImage = [];
        //拿到图片数组
        var imageArr = ImageData.data;
        // console.log("Json数据" + imageArr)
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

    rendetPoint() {
        var indicatorArr = [];
        var imageArr = ImageData.data;
        var style;
        for (var i = 0; i < imageArr.length; i++) {
            //判断
            style = (i == this.state.currentPage) ? { color: 'orange' } : { color: 'red' }
            indicatorArr.push(
                <Text key={i} style={[{ fontSize: 28 }, style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
    //当一帧滚动结束的时候调用
    onAnimationEnd(e) {
        //1.求出水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //2.求出当前的页数(Math.floor 为取整)
        var currentPage = Math.floor(offSetX / width);
        console.log("当前的位第几页：" + currentPage);
        this.setState(
            {
                currentPage: currentPage
            }
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    pageViewStyle: {
        flexDirection: "row",
        width: width,
        height: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'


    }
});

export default viewPageScrollView;
