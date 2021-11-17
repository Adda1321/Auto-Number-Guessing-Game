import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import colors from '../constants/Colors';
function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!</Text>
      <View style={styles.ImgContain}>
        <Image
          style={styles.Img}
          resizeMode="cover"
          //source={require('../android/assets/success.png')}
          source={{
            uri: 'https://cosmosmagazine.com/wp-content/uploads/2020/02/190218-mount-full-1440x810.jpg',
          }}
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
  ImgContain: {
    width: '80%',
    height: 310,
    borderRadius: 200,
    marginVertical: 13,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black',
  },
});
export default GameOver;
