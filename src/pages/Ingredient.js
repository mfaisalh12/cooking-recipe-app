import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
<<<<<<< HEAD
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName,
} from '../data/MockDataAPI';
=======
import styles from './styles';
import {getIngredientName, getAllIngredients} from '../data/MockDataAPI';
>>>>>>> b27398124ea135fce24efe50413297f4c2076bc4

import {CardSearch} from '../components/CardSearch/CardSearch';

export default function IngredientsDetailsScreen(props) {
  const {navigation, route} = props;

  const item = route.params?.ingredients;
  const ingredientsArray = getAllIngredients(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    navigation.navigate('Ingredient', {ingredient, name});
  };

  const renderIngredient = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item[0].photo_url}} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{color: 'grey'}}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  photoIngredient: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
  },
  ingredientInfo: {
    color: 'black',
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  container: CardSearch.container,
  photo: CardSearch.photo,
  title: CardSearch.title,
  category: CardSearch.category,
  mainContainer: {
    pass
  }
});
