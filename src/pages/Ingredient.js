import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import styles from './styles';
import {getIngredientName, getAllIngredients} from '../data/MockDataAPI';

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
    <View style={styles.container}>
      <Image style={styles.photo} source={{uri: item[0].photo_url}} />
      <Text style={styles.title}>{item[0].name}</Text>
      <Text style={{color: 'grey'}}>{item[1]}</Text>
    </View>

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

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

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

  
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginRight: 5,
    marginTop: 23,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#FF8303',
    position: 'relative',
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  category: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    // borderWidth:1
  },
});
