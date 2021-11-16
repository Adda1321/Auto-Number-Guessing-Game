import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../Components/Card';
import colors from '../constants/Colors';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
function StartGameScreen(props) {
  const [input_text, setinput_text] = useState('');
  const [confirmed, setconfirmed] = useState(false);
  const [SelectedNumber, setsetSelectedNumber] = useState();

  const InputHandler = currentInput => {
    setinput_text(currentInput.replace(/[^0-9]/g, ''));
  
  };

  const resetHandler = () => {
    setinput_text('');
  };
  const confirmHandler = () => {
    const chooseNumber = parseInt(input_text);
    // already valifated but again veledating for -ve numbers
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert('Alert Title', 'invalidNumber!', [
        {text: 'okay', style: 'default', onPress: resetHandler},
      ]);
      return;
    }
    //  SelectedNumber
    setconfirmed(true);
    setinput_text('');
    setsetSelectedNumber(parseInt(input_text));
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.Confirm_Output}>
        <Text> Your Selected number: </Text>
        <View>
          <NumberContainer> {SelectedNumber}</NumberContainer>
          <Button title="START" onPress={()=>props.strt(SelectedNumber)}/>
        </View>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        <Card style={styles.InputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.Input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={InputHandler}
            value={input_text}
          />
          <View style={styles.ButtonContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                color={colors.accent}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={confirmHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  InputContainer: {
    width: 300,
    maxWidth: '80%',
    borderRadius: 15,

    alignItems: 'center',
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
    marginHorizontal: 1,
  },
  Input: {
    width: 50,
    textAlign: 'center',
  },
  Confirm_Output: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default StartGameScreen;
