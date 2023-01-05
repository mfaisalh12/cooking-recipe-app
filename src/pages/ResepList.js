import React, {useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {getRecipes, getCategoryName} from '../data/MockDataAPI';
const {width, height} = Dimensions.get('window');

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
    navigation.navigate('Resep', {item});
  };

  const renderRecipes = ({item}) => (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableOpacity>
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
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    width: (SCREEN_WIDTH - (2 + 1) * 20) / 2,
    height: 150 + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
  },
  photo: {
    width: (SCREEN_WIDTH - (2 + 1) * 20) / 2,
    height: 150,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});
