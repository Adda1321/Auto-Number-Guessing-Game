import React, {useState} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
function App() {
  const [userNumber, setuserNumber] = useState();
  const [GuessRound, setGuessRound] = useState(1);

  const configNewGameHandler = () => {
    setGuessRound(0);
    setuserNumber(null);
  };

  const startGame = SelectedNumber => {
    setuserNumber(SelectedNumber);
  };

  const gameOverHandler = numberofRounds => {
    setGuessRound(numberofRounds);
  };

  let content = <StartGameScreen strt={startGame} />;

  if (userNumber && GuessRound <= 0) {
    content = <GameScreen user={userNumber} onGameOver={gameOverHandler} />;
  } else if (GuessRound > 0) {
    content = (
      <GameOver roundNumbers={GuessRound} onRestart={configNewGameHandler} />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title={'Choose a Number:'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default App;
