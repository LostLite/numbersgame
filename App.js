import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

import Colors from './constants/colors';
import { Header } from './components/header';
import { StartGameScreen } from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) return (
    <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)}
      onError={err => console.log(err) } />)

  const configNewGameHandler = () => {
    setUserNumber('');
    setGuessRounds(0);
  }

  const startGameHandler = selectedNumber => setUserNumber(selectedNumber);

  const gameOverHandler = numberOfRounds => setGuessRounds(numberOfRounds);

  let content = <StartGameScreen startGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0) content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  if(guessRounds > 0) content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} newGame={configNewGameHandler}/>;

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
  }
});
