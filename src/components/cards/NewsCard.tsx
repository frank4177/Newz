import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type Slide = {
  title: string;
  name: string;
  date: string;
};

interface Iprops {
  item: Slide;
}

export default function NewsCard({item}: Iprops) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={require('../../assets/icons/beach.png')}
        style={styles.img}
      />

      <View style={styles.content}>
        <LinearGradient
          colors={['#62626259', '#000000']}
          style={styles.linear}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          {/* <View> */}
          <Text style={styles.bigText}>{item.title}</Text>
          <View style={styles.smallTextWrap}>
            <Text style={styles.smallText}>{item.name}</Text>
            <Text style={styles.smallText}>{item.date}</Text>
          </View>
          {/* </View> */}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 20,
    marginBottom: 20,
    width: '90%',
    height: 200,
    borderRadius:20,
    objectFit:"contain",
    position:"relative"
  },
  img: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    objectFit:"cover",
    borderRadius:20
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  linear: {
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"space-between",
    borderRadius:20
  },
  bigText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  smallTextWrap:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  smallText: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
  },
});
