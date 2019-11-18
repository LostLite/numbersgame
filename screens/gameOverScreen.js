import React from 'react';
import {StyleSheet, View, Button, Text, Image} from 'react-native';
import TitleText from '../components/titleText';
import BodyText from '../components/bodyText';
import Colors from '../constants/colors';
import MainButton from '../components/mainButton';

export default function GameOverScreen({rounds, userNumber, newGame}) {
    return (
        <View style={styles.container}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/success.png')}
                    //source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZJc55Hle3WHZcxD6lYm4eHVz2ddp49z6hw3ijUvNo-os8QTEj'}} 
                    style={styles.image} 
                    resizeMode="cover"/>
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </BodyText>
            </View>
            <MainButton onPress={() => newGame()}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image:{
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});
