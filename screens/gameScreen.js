import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Alert, ScrollView, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import {Card} from '../components/card';
import NumberContainer from '../components/numberContainer';
import BodyText from '../components/bodyText';
import MainButton from '../components/mainButton';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNmbr = Math.floor(Math.random() * (max - min)) + min;
    if(rndNmbr === exclude) return generateRandomBetween(min, max, exclude);

    return rndNmbr;
}

const renderListItem = (value, index) => (
    <View key={index} style={styles.listItem}>
        <BodyText>#{index}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
);

export default function GameScreen({userChoice, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(pastGuesses.length);
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
        //setRounds(currentRounds => currentRounds +1);
        setPastGuesses(guessList => [nextNumber, ...guessList]);
    }

    return (
        <View style={styles.container}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={()=> nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={()=> nextGuessHandler('greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
            
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
        marginTop: Dimensions.get('window').height > 600? 20 : 10,
        width: 400,
        maxWidth: '90%'
    },
    button: {
        width: '40%'
    },
    listContainer:{
        flex: 1,
        width: '80%'
    },
    list:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        width: '60%'
    }
});
