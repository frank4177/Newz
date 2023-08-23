import {View, Text} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/shared/safe-area-wrapper';
import SearchBar from '../components/shared/searchBar';
import {useNavigation} from '@react-navigation/native';
import SortCategories from '../components/shared/SortCategories';
import {SortCategoryType} from '../types';
import DraggableModal from '../components/shared/BottomSheet';


const sortCategoryData: SortCategoryType[] = [
  {category: 'Health'},
  {category: 'Tech'},
  {category: 'Finance'},
  {category: 'Crypto'},
  {category: 'Cars'},
];

export default function SearchScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaWrapper>
        <SearchBar />
        <SortCategories data={sortCategoryData} extraButton={true}/>

        <DraggableModal/>
    </SafeAreaWrapper>
  );
}
