import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NewsCard from '../cards/NewsCard';
import {useFetchAllNews} from '../../services/api';

interface Slide {
  title: string;
  name: string;
  date: string;
}

type idata = {
  author: string;
  title: string;
  publishedAt: string;
  urlToImage:string
};

export default function NewsList() {
  const {data} = useFetchAllNews();
  console.log(data);

  const objects: Slide[] = [
    {title: 'eat well', name: 'john', date: '20/23/2020'},
    {title: 'sleep well', name: 'john', date: '20/23/2020'},
    {title: 'run well', name: 'john', date: '20/23/2020'},
  ];

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
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
}
