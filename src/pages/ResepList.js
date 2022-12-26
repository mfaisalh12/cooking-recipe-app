import React, {useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import {getRecipes, getCategoryName} from '../data/MockDataAPI';
import {RecipeCard} from '../AppStyles';

export default function RecipesListScreen(props) {
  const {navigation, route} = props;

  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = item => {
    navigation.navigate('Recipe', {item});
  };

  const renderRecipes = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
});
