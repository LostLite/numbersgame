import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image, ScrollView} from 'react-native';
import TitleText from '../components/titleText';
import BodyText from '../components/bodyText';
import Colors from '../constants/colors';
import MainButton from '../components/mainButton';

export default function GameOverScreen({rounds, userNumber, newGame}) {
    return (
        <ScrollView>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image:{
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});
