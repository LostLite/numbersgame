import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function Input(props) {
    return (
        <TextInput {...props} style={{...styles.textInput, ...props.style}} />
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 3,
        padding: 7,
        marginTop: 10,
        marginBottom: 10
    },
})