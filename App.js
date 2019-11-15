import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/header';
import { StartGameScreen } from './screens/startGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
