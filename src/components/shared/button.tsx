import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {redLinearGradient} from '../../utils/theme';

interface IProps {
  width: number;
  height: number;
  noLinearBackgroundColor: string;
  linearButton: boolean;
  title: string;
  titleColor: string;
  handleClick: (arg: string) => void;
}
var {width, height} = Dimensions.get('window');

export default function Button({
  width,
  height,
  noLinearBackgroundColor,
  linearButton,
  title,
  titleColor,
  handleClick,
}: IProps) {
  return (
    <TouchableOpacity
      onPress={() => handleClick(title)}
      style={[
        styles.btn,
        {height: height ? height : 40, width: width ? width : 100},
      ]}>
        {/* if linear is true then use the linear design */}
      {linearButton ? (
        <LinearGradient
          colors={redLinearGradient.colors}
          start={redLinearGradient.start}
          end={redLinearGradient.end}
          style={[styles.innerWrap]}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      ) : (
        // else use the normal button design
        <View
          style={[
            styles.innerWrap,
            {backgroundColor: noLinearBackgroundColor},
          ]}>
          <Text style={[styles.text, {color: titleColor ? titleColor : "black"}]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
  },
  innerWrap: {
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    color: "white"
  },
  text:{
    fontSize:15,
    fontWeight:"500",
    color:"white"
  }
});
