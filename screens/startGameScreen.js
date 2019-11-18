import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Colors from '../constants/colors';
import { Card } from '../components/card';
import Input from '../components/input';
import NumberContainer from '../components/numberContainer';
import TitleText from '../components/titleText';
import BodyText from '../components/bodyText';
import MainButton from '../components/mainButton';

export const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false );
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => setEnteredValue(inputText.replace(/[^0-9]/g,''));

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number',
                'Input has to be a number between 1 and 99', 
                [
                    {
                        text:'Okay', 
                        style: 'destructive',
                        onPress: () => resetInputHandler()
                    }
                ])
            return;
        };
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed) {
    confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <BodyText>You selected:</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={()=>props.startGame(selectedNumber)}>START GAME</MainButton>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <TitleText style={styles.title}>Start New Game</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a number</BodyText>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="numeric" 
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={() => resetInputHandler()}/></View>
                        <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={() => confirmInputHandler()}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        
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
    input:{
        width: 80,
        textAlign: "center",
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});
