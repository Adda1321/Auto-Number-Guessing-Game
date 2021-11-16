import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import colors from '../constants/Colors';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';

const choosenumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rand_num = Math.floor(Math.random() * (max - min)) + min;
  if (rand_num === exclude) {
    return choosenumber(min, max, exclude);
  } else {
    return rand_num;
  }
};

function GameScreen(props) {
  const [CurrentGuess, setCurrentGuess] = useState(
    choosenumber(1, 100, props.user),
  );
  const [rounds, setrounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {onGameOver, user} = props;
  useEffect(() => {
    if (CurrentGuess === user) {
      onGameOver(rounds);
    }
  }, [CurrentGuess, user, onGameOver]);
  const nextGuesHandler = direction => {
    if (
      (direction === 'lower' && CurrentGuess < props.user) ||
      (direction === 'greater' && CurrentGuess > props.user)
    ) {
      Alert.alert('Dont lie!', 'This is wrong', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = CurrentGuess;
    } else {
      currentLow.current = CurrentGuess;
    }
    const nextNumber = choosenumber(
      currentLow.current,
      currentHigh.current,
      CurrentGuess,
    );

    setCurrentGuess(nextNumber);
    setrounds(currRounds => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess </Text>
      <NumberContainer>{CurrentGuess}</NumberContainer>
      <Card style={styles.btncontainer}>
        <Button title="LOWER" onPress={nextGuesHandler.bind(this, 'lower')} />
        <Button title="GREATER" onPress={() => nextGuesHandler('greater')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});
export default GameScreen;
