import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import SafeAreaWrapper from '../components/shared/safe-area-wrapper';
import HotUpdatesCard from '../components/cards/HotUpdatesCard';

const NotificationsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaWrapper>
      <View style={styles.backAndTitleWrap}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon strokeWidth={3} color="black" size={30}/>
        </TouchableOpacity>

        <Text style={styles.title}>Hot Update</Text>
      </View>

      <View style={styles.cardWrap}>
        <HotUpdatesCard />
      </View>
    </SafeAreaWrapper>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  backAndTitleWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:"center"
  },
  title: {
    color: '#FF3A44',
    fontSize: 20,
    fontWeight: '700',
    width:"90%",
    textAlign:"center"
  },
  cardWrap: {
    marginTop: 20,
  },
});
