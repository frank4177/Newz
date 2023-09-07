import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {redLinearGradient} from '../../utils/theme';

export default function FavouriteButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={redLinearGradient.colors}
        start={redLinearGradient.start}
        end={redLinearGradient.end} style={[styles.innerWrap]}>
        <Image source={require('../../assets/icons/favouriteIcon.png')} style={{width:30, height:30}}/>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    bottom:17,
    right:17,
    zIndex:10,
    borderRadius:50,
    height:70,
    width:70
  },
  innerWrap: {
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    color: "white"
  },
});
