/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { booleanLiteral } from '@babel/types';

const App = () => {
    return (
        <Text style={styles.sectionTitle}>
            第一次测试
        </Text>

    );
};
const styles = StyleSheet.create({

    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
        marginBottom: 10

    },
    highlight: {
        fontWeight: '700',
    }

});
//测试下

export default App;
