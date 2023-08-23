import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from './button';
import {sortCategoryDummyData} from '../../utils/contants';
import {SortCategoryType} from '../../types';
import {redLinearGradient} from '../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';

interface IcategoryProps {
  data: SortCategoryType[];
  extraButton: boolean;
}

interface IExtraCategoryButtonProps {
  // data: SortCategoryType[];
  extraBtnActive: boolean;
  handleClick: (arg: string) => void;
}

export default function SortCategories({data, extraButton}: IcategoryProps) {
  const [activeSort, setActiveSort] = useState<String>('');

  const extraBtnActive = activeSort === 'filter';

  function handleClick(params: string) {
    setActiveSort(params);
  }

  useEffect(() => {
    // Get the first category when the component mounts
    const ko = extraButton ? 'Filter' : 'op';
    if (data?.length > 0) {
      const firstCategory = data[0].category;
      setActiveSort(extraButton ? 'filter' : firstCategory);
    }
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal: 5}}
      showsHorizontalScrollIndicator={false}
      style={{flexGrow: 1}}>
        
      {/* Extra button */}
      {extraButton ? (
        <ExtraCategoryButton
          extraBtnActive={extraBtnActive}
          handleClick={handleClick}
        />
      ) : null}

      {data?.map((sort, index) => {
        let isActive = sort.category == activeSort;
        let titleColor = isActive ? 'white' : 'black';
        return (
          // Category button
          <TouchableOpacity
            onPress={() => handleClick(sort.category)}
            style={[
              styles.btn,
              {height: 50, width: 140,},
            ]}
            key={index}>
            {/* if isActive is true then use the linear button design */}
            {isActive ? (
              <LinearGradient
                colors={redLinearGradient.colors}
                start={redLinearGradient.start}
                end={redLinearGradient.end}
                style={[styles.innerWrap]}>
                <Text style={styles.text}>{sort.category}</Text>
              </LinearGradient>
            ) : (
              // else use the normal button design
              <View style={[styles.innerWrap]}>
                <Text
                  style={[
                    styles.text,
                    {color:'black'},
                  ]}>
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

const ExtraCategoryButton = ({
  extraBtnActive,
  handleClick,
}: IExtraCategoryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleClick('filter')}
      style={[styles.btn, {height: 50, width: 150, }]}>
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
  );
};

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
