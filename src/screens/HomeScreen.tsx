import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/shared/safe-area-wrapper';
import SearchBar from '../components/shared/searchBar';
import Icons from '../components/shared/icons';
import LinearGradient from 'react-native-linear-gradient';
import Notification from '../components/shared/notification';
import LatestNews from '../components/lists/LatestNews';

export default function HomeScreen() {
  return (
    <SafeAreaWrapper>
      {/* search and notification */}
        <View style={styles.searchAndNotificationWrap}>
          <SearchBar />
          <Notification />
        </View>

        {/* Latest news */}
        <LatestNews/>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  searchAndNotificationWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    gap:20
  },
});
