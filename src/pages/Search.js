import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from '../data/MockDataAPI';
import {CardSearch} from '../components/CardSearch/CardSearch';

export default function SearchScreen(props) {
  const {navigation} = props;

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../assets/icons/search.png')}
          />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
            placeholder="Cari Resep"
          />
          <Pressable onPress={() => handleSearch('')}>
            <Image
              style={styles.searchIcon}
              source={require('../assets/icons/close.png')}
            />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);

  const handleSearch = text => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == '') {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressRecipe = item => {
    navigation.navigate('Resep', {item});
  };

  const renderRecipes = ({item}) => (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text
          style={[
            styles.title,
            {color: 'white', fontWeight: 'bold', fontSize: 18},
          ]}>
          {item.title}
        </Text>
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
        data={data}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: CardSearch.container,
  photo: CardSearch.photo,
  title: CardSearch.title,
  category: CardSearch.category,
  btnIcon: {
    height: 10,
    width: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ff8303',
    borderWidth: 2,
    borderRadius: 50,
    width: 355,
    height: 50,
    justifyContent: 'space-around',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'black',
    marginLeft: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    color: 'black',
    width: 250,
    height: 40,
  },
});
