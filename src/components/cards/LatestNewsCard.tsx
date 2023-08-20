import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'


type ItemProp ={
    backgroundColor: String;
}
interface ILatestNewsProps  {
    ite: ItemProp ;
}

var {width, height} = Dimensions.get('window');

export default function LatestNewsCard({ite}: ILatestNewsProps) {
  return (
    <View style={styles.card}>
      <Text style={{color:"red"}}>{ite?.backgroundColor}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      display: 'flex',
      height:height*0.3,
      width:width*0.62,
      backgroundColor:"orange",
    //   marginLeft:5,
    //   marginRight:5
    flex:1
    },
    cardSmall: {
        display: 'flex',
        height:height*4,
        width:width*10,
        backgroundColor:"black",
        // marginLeft:5,
        // marginRight:5
      },
  });