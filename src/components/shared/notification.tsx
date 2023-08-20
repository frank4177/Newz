import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {redLinearGradient} from '../../utils/theme';

interface NotificationProps {
  handleClick: () => void;
}

export default function Notification({handleClick}: NotificationProps) {
  return (
    <TouchableOpacity onPress={()=> handleClick()}>
      <LinearGradient
        colors={redLinearGradient.colors}
        start={redLinearGradient.start}
        end={redLinearGradient.end}
        style={styles.iconWrap}>
        <View style={styles.notificationwrap}>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{width: 20.75, height: 22.18}}
          />
          <View style={styles.alert}></View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
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
  notificationwrap: {
    position: 'relative',
  },
  alert: {
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: '#FFE600',
    position: 'absolute',
    right: 0,
    top: -5,
  },
});
