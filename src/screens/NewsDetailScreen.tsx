import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import FavouriteButton from '../components/shared/FavouriteButton';
import {newsData} from '../types';
import {useNavigation} from '@react-navigation/native';

export default function NewsDetailScreen(props: newsData) {
  const navigation = useNavigation();
  const {title, author,  urlToImage, content} = props?.route?.params;
  return (
    <View style={{flex: 1}}>
      <FavouriteButton />
      <Image
        source={{uri: urlToImage}}
        style={{height: '55%', width: '100%', objectFit:"cover"}}
      />
      <StatusBar barStyle="dark-content" />

      {/* back button */}
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon strokeWidth={3} color="black" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* body */}
      <View style={styles.body}>
        {/* blurry title card */}
        <View style={styles.headerTitle}>

          <View style={styles.textWrap}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Sunday, 9 Mkay 2023
            </Text>
            <Text style={{fontSize: 16, fontWeight: '700'}}>{title}</Text>
            <Text style={{fontSize: 13, fontWeight: '700'}}>
              Published by <Text>{author}</Text>
            </Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={{fontSize:16, lineHeight:25, fontWeight:"500"}}>
            {content}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 20,
  },
  back: {
    height: 40,
    width: 40,
    backgroundColor: '#F5F5F580',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  body: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: -40,
    paddingRight: 20,
  },
  headerTitle: {
    width: '85%',
    height: 150,
    marginTop: -70,
    borderRadius: 20,
    alignSelf: 'center',
    position: 'relative',
    backgroundColor:"hsla(0, 0%, 92%, 0.8)"
  },
  description: {
    marginTop:30
  },
  textWrap: {
    display: 'flex',
    gap: 10,
    padding: 10,
    
  },
});
