import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {Card} from '../components/card'
import NumberContainer from '../components/numberContainer'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNmbr = Math.floor(Math.random() * (max - min)) + min;
    if(rndNmbr === exclude) return generateRandomBetween(min, max, exclude);

    return rndNmbr;
}

export default function GameScreen({userChoice, onGameOver}) {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    },[currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < userChoice) || 
            (direction === 'greater' && currentGuess > userChoice)){
                Alert.alert('Wrong Hint','Give a good hint you swine!!', [
                    {text: 'Sorry', style: 'cancel'}
                ]);
                return;
        }

        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds +1);
    }

    return (
        <View style={styles.container}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}><Button title="LOWER" onPress={()=> nextGuessHandler('lower')}/></View> 
                <View style={styles.button}><Button title="GREATER" onPress={()=> nextGuessHandler('greater')}/></View> 
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
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    button: {
        width: '40%'
    }
});
