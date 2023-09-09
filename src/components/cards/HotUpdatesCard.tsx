import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function HotUpdatesCard() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/beach.png')}
        style={{height: 150, width: 400, objectFit: 'cover', borderRadius: 20}}
      />

      <View style={styles.textWrap}>
        <Text>Monday, 10th May 2021</Text>
        <View>
          <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
            Who classifes
          </Text>
          <Text style={{fontSize: 15,lineHeight:20, fontWeight: '400' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            ab magni. Facere, nostrum tempora adipisci at sequi dolore
            laudantium repellat!
          </Text>
        </View>

        <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
          Published by<Text>baik koo</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
  textWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
});
