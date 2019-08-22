import React, {Component} from 'react';
import {observer} from "mobx-react";

@observer
class Upload extends Component {
    render() {
        //解析从父组件传过来的数据
        const {vm} = this.props;
        return (
            <View>
                <TextInput placeholder={'请输入FirstName：'} onChangeText={() => vm.setValue('firstName', e)}
                           value={vm.firstName} style={styles.inputStyle}/>
                <TextInput placeholder={'请输入LastName：'} onChangeText={() => vm.setValue('lastName', e)}
                           value={vm.lastName} style={styles.inputStyle}/>
                <Text style={styles.inputStyle}>
                    FullName:{vm.fullName}
                </Text>
                <Button
                    title={'重置'} color={'green'} onPress={() => {
                    vm.doReset()
                }} style={styles.inputStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        marginBottom20
    }
})