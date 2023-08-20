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
import Carousel from 'react-native-reanimated-carousel';

var {width, height} = Dimensions.get('window');

interface Slide {
  backgroundColor: string;
}

export default function LatestNews() {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: any) => {

  };

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
          <Text style={{fontSize: 16}}>See All</Text>
          <Image
            source={require('../../assets/icons/arrowRight.png')}
            style={{width: 18, height: 20}}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable card */}
      <View style={{paddingLeft:20, flexGrow: 1}}>
        {/* <Carousel
                // loop
                width={width}
                height={width / 2}
                // autoPlay={true}
                data={objects}
                // scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({item, index})=> (<LatestNewsCard  ite={item} key={index}/>)}
            /> */}
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
    gap: 20,
    marginBottom: 20,
  },
  seeAll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
    fontSize: 60,
  },
});
