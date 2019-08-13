/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';

var dimensions = require('Dimensions')
var {width, height} = dimensions.get('window')


class loginView extends Component {
    //不可改变的值ES5的写法
    /*        getDefaultProps() {
                return {
                    age: 18
                }
            }*/

    //Es6不可改变的写法
    static defaultProps = {
        ages: '王麻子',
        sex: 'man',
        tel: '13866666666'
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
            title: '不透明触摸',
            person: '张三'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*头像icon*/}
                <Image source={require('../img/icon.png')} style={styles.iconStyle}/>
                {/*用户名和密码*/}
                <TextInput placeholder={'请输入用户名：'} style={styles.textInputStyle}>

                </TextInput>
                {/*密码*/}
                <TextInput placeholder={'请输入密码：'} secureTextEntry={true} style={styles.textInputStyle}>

                </TextInput>
                {/*登录按钮*/}
                <View ref="topView" style={styles.loginBtnStyle}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.activeEvent('点击')}>
                        {/*onPressIn={() => this.activeEvent('按下')}>
                        onPressOut={() => this.activeEvent('抬起')}>
                        onLongPress={() => this.activeEvent('长按')}>*/}
                        <Text ref="event" style={{color: 'white'}}>
                            登录
                        </Text>
                    </TouchableOpacity>
                </View>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    {/*设置*/}
                    <Text>{'无法登录' + this.state.person}</Text>
                    <Text>{'新用户' + this.props.ages}</Text>
                </View>
                {/*其他方式登录*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他方式登录</Text>
                    <Image source={require('../img/icon3.png')} style={styles.outerImageStyle}/>
                    <Image source={require('../img/icon7.png')} style={styles.outerImageStyle}/>
                    <Image source={require('../img/icon8.png')} style={styles.outerImageStyle}/>
                </View>
            </View>

        );
    }

    activeEvent(event) {
        //更新状态机
        this.setState({
            title: event,
            person: '李四',
        })
        //拿到view、（个人理解相当于id 也可以理解为findbyId（R.id.topView））
        this.refs.topView
        this.refs.event
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        //侧轴对其方式
        alignItems: 'center'
    },
    iconStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: width / 4,
        height: width / 4,
        borderRadius: Platform.OS === 'android' ? 80 : 40
    },
    textInputStyle: {
        height: 38,
        width: width,
        backgroundColor: 'white',
        marginBottom: 1,
        //内容居中
        textAlign: 'center'
    },
    loginBtnStyle: {
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: 'blue',
        width: width * 0.9,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    settingStyle: {
        //设置主轴的方向
        flexDirection: 'row',
        //主轴的对其方式
        justifyContent: 'space-between',
        width: width * 0.9
    },
    otherLoginStyle: {
        //设置主轴的方向
        flexDirection: 'row',
        //侧轴对其方式
        alignItems: 'center',
        //绝对定位
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    outerImageStyle: {
        width: 50,
        height: 50,
        marginLeft: 8,
        borderRadius: 25
    }

});

export default loginView;
// module.exports = loginView;
