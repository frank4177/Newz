import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NewsCard from '../cards/NewsCard';

interface Slide {
  title: string;
  name: string;
  date: string;
}

export default function NewsList() {

  const objects: Slide[] = [
    {title: 'eat well', name: 'john', date: '20/23/2020'},
    {title: 'sleep well', name: 'john', date: '20/23/2020'},
    {title: 'run well', name: 'john', date: '20/23/2020'},
  ];

  return (
    <View>
      <FlatList
        data={objects}
        keyExtractor={item => item.title.toString()}
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={<EmptyList message="No Expense found :(" />}
        renderItem={({item}) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
}
