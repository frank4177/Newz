import {View, Text, TextInput, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

var {width, height} = Dimensions.get('window');

export default function SearchBar() {
  return (
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          placeholder="Dogecoin"
          placeholderTextColor="#818181"
        />
        <Image
          source={require('../../assets/icons/magnifier.png')}
          style={{width: 22.8, height: 22}}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    borderColor: '#F0F1FA',
    borderWidth: 2,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
    width:"80%",
  },
  input: {
    paddingLeft: 2,
  },
});
