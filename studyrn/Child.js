import React, {Component} from 'react';
import {observer} from "mobx-react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    Button,
    Dimensions
} from 'react-native'
import GirdView from "./girdview";
import Father from "./Father";

var {width, height} = Dimensions.get('window');

@observer
class Upload extends Component {
    render() {
        //解析从父组件传过来的数据
        const {vm} = this.props;
        return (
            <View style={[{flex: 1}, {backgroundColor: '#ededed'}, {alignItems: 'center'}]}>
{/*                <Text style={styles.textStyle}>
                    First Name:{''}
                </Text>*/}
                <TextInput editable={true} placeholder={'请输入FirstName：'} value={vm.firstName}
                           onChange={e => vm.setValue('firstName', e)}
                           style={styles.inputStyle}/>
{/*                <Text style={styles.textStyle}>
                    Last Name:{''}
                </Text>*/}
                <TextInput editable={true} placeholder={'请输入LastName：'} value={vm.lastName}
                           onChange={e => vm.setValue('lastName', e)}
                           style={styles.inputStyle}/>
                <Text style={styles.textStyle}>
                    FullName:{vm.fullName}
                </Text>
                <Button
                    title={'重置'} color={'green'} with={width * 0.9} marginTop={20} onPress={() => {
                    vm.doReset()
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: width * 0.8,
        height: 35,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'red'
    },
    textStyle: {
        color: 'blue'
    }
})

export default Upload;
