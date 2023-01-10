import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {categories} from '../data/dataArrays';

export default function CategoriesScreen({navigation}) {
  const onPressCategory = item => {
    const title = item.name;
    const category = item;
    navigation.navigate('ResepList', {category, title});
  };

  const renderCategory = ({item}) => (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Image style={styles.categoriesPhoto} source={{uri: item.photo_url}} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 225,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  categoriesPhoto: {
    width: '70%',
    height: 155,
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginBottom: '6%',
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#A35709',
    marginTop: 8,
  },
});
