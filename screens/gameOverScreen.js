import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function GameOverScreen({rounds, userNumber, newGame}) {
    return (
        <View style={styles.container}>
            <Text>Game Over!</Text>
            <Text>Number of rounds: {rounds}</Text>
            <Text>User number: {userNumber}</Text>
            <Button title="NEW GAME" onPress={() => newGame()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
