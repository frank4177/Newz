import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NewsCard from '../cards/NewsCard';
import {useFetchAllNews} from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import {  AppStackNavigationType, HomeScreenNavigationType } from '../../navigation/types';

interface Slide {
  title: string;
  name: string;
  date: string;
}


export default function NewsList() {
  const navigation = useNavigation<HomeScreenNavigationType>();
  const {data} = useFetchAllNews();
  
  function handleNewsClick(item: object) {
    navigation.navigate('NewsDetailScreen', {...item});
  }



  const getItemLayout = (data: ArrayLike<any> | null | undefined, index: number) => ({
    length: 170, // Replace with the actual height of your item
    offset: 170* index,
    index,
  });

  return (
    <View>
      <FlatList
        data={data?.articles}
        keyExtractor={item => item.title.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10} // Adjust as needed
        windowSize={10}
        getItemLayout={getItemLayout}
        // ListEmptyComponent={<EmptyList message="No Expense found :(" />}
        renderItem={({item}) => {
          return <NewsCard item={item} handleNewsClick={handleNewsClick}/>;
        }}
      />
    </View>
  );
}
