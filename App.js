import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from './constants/colors';
import { Header } from './components/header';
import { StartGameScreen } from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);

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
