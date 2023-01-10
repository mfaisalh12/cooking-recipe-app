import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import {getRecipes, getCategoryName} from '../data/MockDataAPI';
const {width, height} = Dimensions.get('window');
import {API_KEY} from '@env';

export default function RecipesListScreen(props) {
  const {navigation, route} = props;
  const [recipesArray, setRecipesArray] = useState([]);

  const items = route?.params?.category;

  useEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
    dataAPI();
  }, []);

  const dataAPI = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=${items.param}`;
    const config = {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.get(url, config);
      console.log('Categori dijalankan');
      setRecipesArray(response.data);
    } catch (error) {
      console.log(error);
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
        <Image style={styles.photo} source={{uri: item.image}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{route.params?.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray.results}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.id}`}
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
