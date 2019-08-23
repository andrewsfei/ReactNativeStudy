import React, {Component} from 'react';
// 引入 mobx
import {observable, computed, action} from "mobx";
// 引入子组件
import Child from './Child';

//定义属性
class VM {
    @observable
    firstName = "";
    @observable
    lastName = "";

    @computed
    get fullName() {

        console.log(JSON.stringify(this))
        // alert(JSON.stringify(this))
        const {fristName, lastName} = this;
        if (!fristName && !lastName) {
            return 'please input your name!'
        } else {
            return fristName + '' + lastName;
        }
    }

    @action.bound
    setValue(key, event) {
        this[key] = event.target.value;
    }

    @action.bound
    doReset() {
        this.firstName = "";
        this.lastName = "";
    }
}

const vm = new VM();

class Father extends Component {
    render() {
        return (
            <Child vm={vm}/>
        )
    }
}

export default Father;

