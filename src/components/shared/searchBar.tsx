import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

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
  iconWrap: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    flex:1
  },
  input: {
    flex: 1,
    paddingLeft: 2,
  },
});
