import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import Colors from '../constants/colors';
import { Card } from '../components/card';

export const StartGameScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput placeholder="Enter number" style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={() => {}}/></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={() => {}}/></View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        borderColor: '#cccccc',
        borderWidth: 1,
        padding: 7,
        marginTop: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%'
    }
});
