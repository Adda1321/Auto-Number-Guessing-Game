import React from 'react';

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
function Card(props) {
  return (
    <View style={{...styles.card, ...props.style}}>
     {props.children} 
      </View>
    //    <View>

    //       
    //    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 15,
  },
});
export default Card;