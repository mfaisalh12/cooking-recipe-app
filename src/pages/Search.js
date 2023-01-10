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
  Dimensions,
} from 'react-native';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from '../data/MockDataAPI';
import axios from 'axios';
import {CardSearch} from '../components/CardSearch/CardSearch';
import {API_KEY} from '@env';

export default SearchScreen = props => {
  const {navigation} = props;

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image
            style={[styles.searchIcon, {marginLeft: 12}]}
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
              style={[styles.searchIcon, {marginRight: 12}]}
              source={require('../assets/icons/close.png')}
            />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  const dataAPI = async text => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${text}`;
    const config = {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.get(url, config);
      console.log('Search  dijalankan');
      setData(await response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = text => {
    setValue(text);

    if (text == '') {
      setData([]);
    } else {
      dataAPI(text);
    }
  };

  const onPressRecipe = item => {
    navigation.navigate('Resep', {item});
  };

  const limitText = (string = '', limit = 0) => {
    return string.substring(0, limit);
  };

  const renderRecipes = ({item}) => (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.image}} />
        <Text
          style={[
            styles.title,
            {color: 'white', fontWeight: 'bold', fontSize: 18},
          ]}>
          {item.title.length > 12
            ? limitText(item.title, 12) + '...'
            : item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data.results}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: CardSearch.container,
  photo: CardSearch.photo,
  title: CardSearch.title,
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
    width: SCREEN_WIDTH - 2 * 20,
    justifyContent: 'space-around',
    margin: 7,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  searchInput: {
    backgroundColor: 'white',
    color: 'black',
    width: 250,
    height: 40,
  },
});
