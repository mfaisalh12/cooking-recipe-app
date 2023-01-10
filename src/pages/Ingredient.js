import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function IngredientsDetailsScreen(props) {
  const {navigation, route} = props;

  const item = route.params?.ingredients;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const capitalizeText = text => {
    const arr = text.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(' ');
    return str2;
  };

  const renderIngredient = ({item}) => (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`,
        }}
      />
      <Text style={styles.title}>{capitalizeText(item.name)}</Text>
      <Text style={styles.origin}>{item.original}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={item}
        renderItem={renderIngredient}
        keyExtractor={item => `${item.id}`}
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
    height: RECIPE_ITEM_HEIGHT + 100,
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#fff',
    borderColor: '#FF8303',
    borderWidth: 2,
    position: 'relative',
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT - 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#A35709',
    textAlign: 'center',
    marginTop: 10,
  },
  origin: {
    flex: 1,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
  },
});
