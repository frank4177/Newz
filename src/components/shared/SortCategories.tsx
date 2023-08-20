import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from './button';
import { sortCategoryDummyData } from '../../utils/contants';
import { SortCategoryType } from '../../types';

interface IcategoryProps {
  data: SortCategoryType[]
}

export default function SortCategories({data}: IcategoryProps) {
  const [activeSort, setActiveSort] = useState<String>('');



  function handleClick(params: string) {
    setActiveSort(params);
  }

  useEffect(() => {
    // Get the first category when the component mounts
    if (data?.length > 0) {
      const firstCategory = data[0].category;
      setActiveSort(firstCategory);
    }
  }, []);
  

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 5 }}
      showsHorizontalScrollIndicator={false}
      style={{flexGrow: 1}}>
      {data?.map((sort, index) => {
        let isActive = sort.category == activeSort;
        let btn = isActive ? true : false;
        let titleColor = isActive ? "white" : "black"
        return (
          <Button
            title={sort.category}
            handleClick={handleClick}
            width={140}
            height={40}
            key={index}
            noLinearBackgroundColor="transparent"
            linearButton={btn}
            titleColor={titleColor}
          />
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
    padding: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    display: 'flex',
  },
  btnActive: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    display: 'flex',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
  },
});
