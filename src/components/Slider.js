import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = props => {
  const [index, setIndex] = useState(2);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnViewableItemsChanged = useRef(({viewableItems, item}) => {
    console.log(item);
    if (viewableItems[0]) {
      setIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({item}) => <SlideItem item={item} key={3} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
      <Pagination data={props.data} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
