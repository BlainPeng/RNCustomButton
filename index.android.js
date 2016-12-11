/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CustomButton from './ButtonComponent';
export default class RNCustomButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomButton
                    text="确定"
                    buttonColor="red"
                    buttonType="normal"
                    textStyle={styles.textStyle}
                    style={styles.customButton}
                    disableColor="grey"
                    onPress={(callback)=> {
                        setTimeout(()=> {

                            callback();

                        }, 3000);
                    }}
                />
                <CustomButton
                    text="确定"
                    buttonColor="red"
                    buttonType="stroke"
                    textStyle={styles.textStyle}
                    style={styles.customButton}
                    disableColor="grey"
                    onPress={(callback)=> {
                        setTimeout(()=> {

                            callback();

                        }, 3000);
                    }}
                />
                <CustomButton
                    text="确定"
                    buttonColor="red"
                    buttonRadius={20}
                    buttonType="text"
                    textStyle={styles.textStyle}
                    disableColor="grey"
                    textMargin={20}
                    style={{marginTop:20}}
                    onPress={(callback)=> {
                        setTimeout(()=> {

                            callback();

                        }, 3000);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    customButton: {
        width: 150,
        height: 40,
        marginTop:40
    },
    textStyle: {
        color: 'blue',
        fontSize:20
    },
});

AppRegistry.registerComponent('RNCustomButton', () => RNCustomButton);
