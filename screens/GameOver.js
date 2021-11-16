import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import colors from '../constants/Colors';
function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!</Text>
      <View  style={styles.ImgContain}>
       <Image
        style={styles.Img}
        resizeMode="contain"
        source={require('../android/assets/success.png')}
      /> 
      </View>
      <Text>Number of Rounds : {props.roundNumbers}</Text>
      <Button title="Restart" onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    width: '100%',
    height: '100%',
    

  },
  ImgContain:{
    width: '80%',
    height: 300,
    borderRadius:200,
    marginVertical:13,
    overflow:'hidden',
    borderWidth:3,
    borderColor:'black',
    backgroundColor:'blue',

  }
});
export default GameOver;
