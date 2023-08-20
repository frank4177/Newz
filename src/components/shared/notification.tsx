import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Notification() {
  return (
    <View>
      <TouchableOpacity>
        <LinearGradient colors={['#FF8086', '#FF3A44']} style={styles.iconWrap}>
          <View style={styles.notificationwrap}>
            <Image
              source={require('../../assets/icons/bell.png')}
              style={{width: 20.75, height: 22.18}}
            />
            <View style={styles.alert}></View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
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
  notificationwrap:{
    position:"relative",
  },
  alert: {
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: '#FFE600',
    position:"absolute",
    right: 0,
    top: -5
  },

});
