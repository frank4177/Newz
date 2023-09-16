import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import LatestNewsCard from '../cards/LatestNewsCard';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationType} from '../../navigation/types';
import Carousel from 'react-native-snap-carousel';
import { useFetchLatestNews } from '../../services/api';

var {width, height} = Dimensions.get('window');

interface Slide {
  backgroundColor: string;
}

export default function LatestNews() {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const navigation = useNavigation<AppStackNavigationType>();
  const {data} = useFetchLatestNews()

  function handleSeeAllClick() {
    navigation.navigate('SearchScreen');
  }

  function handleNewsClick(item: object) {
    navigation.navigate('NewsDetailScreen', {...item});
  }

  const objects: Slide[] = [
    {backgroundColor: 'red'},
    {backgroundColor: 'green'},
    {backgroundColor: 'blue'},
  ];

  return (
    <View>
      <View style={styles.titleAndArrowWrap}>
        {/* Title */}
        <Text style={{fontSize: 20, fontWeight: '900', color: 'black'}}>
          Latest News
        </Text>

        {/* See all */}
        <TouchableOpacity style={styles.seeAll}>
          <Text style={{fontSize: 16}} onPress={() => handleSeeAllClick()}>
            See All
          </Text>
          <Image
            source={require('../../assets/icons/arrowRight.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable card */}
      <View style={{flexGrow: 1,  height:230, marginTop:15}}>
        <Carousel
        layout={'default'}
          data={data?.articles}
          firstItem={1}
          // loop={true}
          // inactiveSlideScale={0.86}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.62}
          slideStyle={{display: 'flex', alignItems: 'center'}}
          renderItem={({item, index} :any) => (
            <LatestNewsCard item={item} key={index} handleNewsClick={handleNewsClick}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleAndArrowWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  seeAll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
});
