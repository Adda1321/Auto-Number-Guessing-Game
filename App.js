import React, {useState} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
function App() {
  const [userNumber, setuserNumber] = useState();

  const startGame = SelectedNumber => {
  
    setuserNumber(SelectedNumber);
   
  };
 
  let content = <StartGameScreen strt={startGame} />;

  if (userNumber) {
    content = <GameScreen user={userNumber} />; 
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
