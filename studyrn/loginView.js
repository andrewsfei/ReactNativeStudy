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
    TextInput
} from 'react-native';


/*const App = () => {
    return (
        <Text style={styles.sectionTitle}>
            第一次测试
        </Text>

    );
};*/

class loginView  extends Component{
    render() {
        return (
            <View style={styles.container}>
                {/*头像icon*/}
                <Image source={require('../img/icon.png')} style={styles.iconStyle}/>
                {/*用户名和密码*/}
                <TextInput placeholder={'请输入用户名：'} style={styles.textInputStyle}>

                </TextInput>
                {/*密码*/}
                <TextInput placeholder={'请输入密码：'} password={true} style={styles.textInputStyle}>

                </TextInput>
                {/*登录按钮*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:'white'}}>
                        登录
                    </Text>
                </View>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    {/*设置*/}
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd'
    },
    iconStyle: {},
    textInputStyle: {},
    loginBtnStyle: {},
    settingStyle: {},
    otherLoginStyle: {},
    outerImageStyle: {}

});

export default loginView;
// module.exports = loginView;
