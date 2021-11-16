import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';

function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Choose a Number:'} />
      <StartGameScreen/> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default App;
