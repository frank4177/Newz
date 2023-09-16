import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {newsData} from '../../types';
import LinearGradient from 'react-native-linear-gradient';



interface Iprops {
  item?: newsData;
  handleNewsClick?: (parem: object) => void;
}

var {width, height} = Dimensions.get('window');

export default function LatestNewsCard({item, handleNewsClick}: Iprops) {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>handleNewsClick(item)}>
      <Image source={{uri: item && item?.urlToImage}} style={styles.img} />
      <View>
        <LinearGradient
          colors={['#62626259', '#000000']}
          style={styles.linear}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
        <Text></Text>
        <View>
          <Text style={[styles.smallText, {fontWeight: 'bold', marginBottom:7}]}>{item?.author}</Text>
          <Text style={styles.bigText}>{item.title}</Text>
        </View>
        <Text style={styles.smallText}>{item.source.name}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 100,
    width: '100%',
    borderRadius: 10,
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    objectFit: 'cover',
    borderRadius: 10,
  },
  linear: {
    height: '100%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  smallText: {
    fontSize: 12,
    alignSelf: 'baseline',
    color: 'white',
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});
