import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../constants/Colors';
function NumberContainer(props) {
  return (
      //
    <View style={styles.container}>
      <Text style={styles.number} > {props.children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
container:{
    borderWidth:2,
    borderColor:colors.accent,
    padding:10,
    borderRadius:5,
    marginVertical:10,
    textAlign:'center',
    alignItems:'center',
    justifyContent: 'center',
},
number:{
    color:colors.accent,
    fontSize:22,
textAlign:'center',

}

})

export default NumberContainer;
