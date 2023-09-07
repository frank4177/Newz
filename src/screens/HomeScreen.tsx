import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/shared/safe-area-wrapper';
import SearchBar from '../components/shared/searchBar';
import Notification from '../components/shared/notification';
import LatestNews from '../components/lists/LatestNews';
import SortCategories from '../components/shared/SortCategories';
import NewsList from '../components/lists/NewsList';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationType} from '../navigation/types';
import {SortCategoryType} from '../types';

export default function HomeScreen() {
  const navigation = useNavigation<AppStackNavigationType>();

  function handleNotificationClick() {
    navigation.navigate('NotificationsScreen');
  }



  const sortCategoryData: SortCategoryType[] = [
    {category: 'Health'},
    {category: 'Tech'},
    {category: 'Finance'},
    {category: 'Crypto'},
    {category: 'Cars'},
  ];

  return (
    <SafeAreaWrapper>
      {/* search and notification */}
      <View style={styles.searchAndNotificationWrap}>
        <SearchBar />
        <Notification handleClick={handleNotificationClick} />
      </View>

      {/* Latest news */}
      <LatestNews />
      {/* <SortCategories data={sortCategoryData} extraButton={false} /> */}

      {/* News list */}
      <NewsList/>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  searchAndNotificationWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 20,
  },
});
