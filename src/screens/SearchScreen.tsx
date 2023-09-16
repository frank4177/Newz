import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../components/shared/safe-area-wrapper';
import SearchBar from '../components/shared/searchBar';
import {useNavigation} from '@react-navigation/native';
import SortCategories from '../components/shared/SortCategories';
import {SortCategoryType} from '../types';
import NewsList from '../components/lists/NewsList';
import BottomSheet from '../components/shared/BottomSheet';
import {HomeScreenNavigationType} from '../navigation/types';

const sortCategoryData: SortCategoryType[] = [
  {category: 'Health'},
  {category: 'Tech'},
  {category: 'Finance'},
  {category: 'Crypto'},
  {category: 'Cars'},
];

export default function SearchScreen() {
  const navigation = useNavigation<HomeScreenNavigationType>();
  const [activeSort, setActiveSort] = useState<string>('filter');
  const [bottomModal, setBottomModal] = useState<boolean>(false);

  return (
    <SafeAreaWrapper>
      <SearchBar />
      <View>
        <SortCategories
          data={sortCategoryData}
          extraButton={true}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          handleExtraButton={setBottomModal}
        />
      </View>
      <Text>About 11,000 results for covid new variant</Text>

      <NewsList />

      <BottomSheet bottomModal={bottomModal} setBottomModal={setBottomModal} />
    </SafeAreaWrapper>
  );
}
