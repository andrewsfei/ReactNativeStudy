/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/***
 * ListView布局
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'



//导入json数据
// import WineData from '../Wine.json'
import WineData from './../studyrn/Wine.json'
//跳转路由
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
//引入外部资源
import GirdView from './girdview';
// import GirdView from '../studyrn/girdview'

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

//定义一些全局的变量
var clos = 3;
var boxW = 100;
var vMargin = (width - clos * boxW) / (clos + 1);
var hMargin = 15;

class FlatLists extends Component {

    static navigationOptions = {
        tabBarVisible: false, // 隐藏底部导航栏
        header: null,  //隐藏顶部导航栏
    };

    //设置初始化值
    static defaultProps = {

    }

    constructor(props) {
        super(props)
        // 创建datasource数据源
        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            // 用相应的clone方法设置datasource的初始值
            // dataSource: ds.cloneWithRows(WineData) //放置数组
            data: WineData,
            name: ''
        }

    }


    render() {
        return (
            <FlatList
                // dataSource={this.state.dataSource}//关联state中的datasource
                // renderRow={(item) => this.renderRow(item)}//制定listView的显示效果
                // dataSource={this.state.dataSource}  // 数据源
                data={this.state.data}
                renderItem={this.renderItem}
            />
        );

    }

    //item是个变量必须用{}包含不包含的话就是常
    renderItem = ({ item }) => {

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.onPressNavigator(item)} >
                <View style={styles.container}>
                    {<Image source={{ uri: 'http://b-ssl.duitang.com/uploads/item/201410/21/20141021130124_FuaME.jpeg' }} style={styles.leftImageStyle} />}
                    {/* {<Image source={{ uri: item.image }} style={styles.leftImageStyle} />} */}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{item.name}</Text>
                        <Text style={styles.bottomTitleStyle}>¥{item.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
    onPressNavigator(data) {
        console.log('打印数据值' + data)
        alert(data.name)
/*         this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Gird' })
            ],
        })) */

        // //往下个页面跳转传值
        this.props.navigation.navigate('Gird',{name:data.name})
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',

    },

    rightViewStyle: {
        justifyContent: 'center'
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        marginRight: 15
    },
    topTitleStyle: {
        color: 'red',
        fontSize: 15,
        width: width * 0.7,
        marginBottom: 8,
    },
    bottomTitleStyle: {
        color: 'blue'
    }
});


export default FlatLists;

