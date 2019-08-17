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
import { wrap } from 'module';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

//定义一些全局的变量
var clos = 3;
var boxW = 100;
var vMargin = (width - clos * boxW) / (clos + 1);
var hMargin = 15;

class ListViews extends Component {
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
            data: WineData
        }

    }

    render() {
        return (
            <FlatList
                // dataSource={this.state.dataSource}//关联state中的datasource
                // renderRow={(item) => this.renderRow(item)}//制定listView的显示效果
                // dataSource={this.state.dataSource}  // 数据源
                data={this.state.data}
                renderItem={this.renderListItem}
            />
        );

    }
    //item是个变量必须用{}包含不包含的话就是常
    renderListItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5} >
                <View style={styles.container}>
                    {<Image source={{ uri: 'http://b-ssl.duitang.com/uploads/item/201410/21/20141021130124_FuaME.jpeg' }} style={styles.leftImageStyle} />}
                    {/*                     <Image source={{uri:item.image}}style={styles.leftImageStyle}/> */}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{item.name}</Text>
                        <Text style={styles.bottomTitleStyle}>¥{item.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'white',
        //下划线
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',

    },

    rightViewStyle: {
        // 主轴的对齐方式
        justifyContent: 'center'
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        marginRight: 15
    },
    topTitleStyle: {
        color:'red',
        fontSize:15,
        width:width * 0.7,
        marginBottom:8,
    },
    bottomTitleStyle: {
        color:'blue',
    }
});

export default ListViews;

