import React from 'react'

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
function Input(props) {
    return (
        <TextInput  {...props} style={{...styles.Input,...props.style}} />
    )
};

const styles = StyleSheet.create({
    Input:{
        height:45 ,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10,
    },
})
export default Input
