import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from './button';
import {SortCategoryType} from '../../types';
import {redLinearGradient} from '../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';

interface IcategoryProps {
  data?: SortCategoryType[];
  extraButton?: boolean;
  setActiveSort?: React.Dispatch<React.SetStateAction<string>> | undefined;
  activeSort?: string;
  handleExtraButton?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

export default function SortCategories({
  data,
  extraButton,
  activeSort,
  handleExtraButton,
  setActiveSort,
}: IcategoryProps) {
  const extraBtnActive = activeSort === 'filter';

  function handleClick(params: string) {
    setActiveSort(params);
  }

  function handleExtraBtn() {
    setActiveSort('filter');
    handleExtraButton(true);
  }

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal: 5}}
      showsHorizontalScrollIndicator={false}
      style={{flexGrow: 1}}>
      {/*STATIC FILTER BUTTON */}
      {extraButton ? (
        <TouchableOpacity
          onPress={() => handleExtraBtn()}
          style={[styles.btn, {height: 50, width: 150}]}>
          {extraBtnActive ? (
            <LinearGradient
              colors={redLinearGradient.colors}
              start={redLinearGradient.start}
              end={redLinearGradient.end}
              style={[styles.innerWrap]}>
              <Text style={styles.text}>Filter</Text>
            </LinearGradient>
          ) : (
            // else use the normal button design
            <View style={[styles.innerWrap]}>
              <Text style={[styles.text, {color: 'black'}]}>Filter</Text>
            </View>
          )}
        </TouchableOpacity>
      ) : null}

      {/* MAPPED BUTTONS */}
      {data?.map((sort, index) => {
        let isActive = sort.category == activeSort;
        return (
          <TouchableOpacity
            onPress={() => handleClick(sort.category)}
            style={[styles.btn, {height: 50, width: 140}]}
            key={index}>
            {/* If isActive is true then use the linear button design */}
            {isActive ? (
              <LinearGradient
                colors={redLinearGradient.colors}
                start={redLinearGradient.start}
                end={redLinearGradient.end}
                style={[styles.innerWrap]}>
                <Text style={styles.text}>{sort.category}</Text>
              </LinearGradient>
            ) : (
              // Else use the normal button design
              <View style={[styles.innerWrap]}>
                <Text style={[styles.text, {color: 'black'}]}>
                  {sort.category}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: 'whitesmoke',
    padding: 10,
  },
  btn: {
    borderRadius: 30,
  },
  innerWrap: {
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    color: 'white',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
});
