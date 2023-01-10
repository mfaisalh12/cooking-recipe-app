import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {recipes} from '../data/dataArrays';
import {getCategoryName} from '../data/MockDataAPI';
import {RecipeCard} from '../AppStyles';
import axios from 'axios';
import {API_KEY} from '@env';

const BerandaScreen = props => {
  const {navigation} = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    dataAPI();
  }, []);

  const dataAPI = async () => {
    const url = 'https://api.spoonacular.com/recipes/complexSearch';
    const config = {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.get(url, config);
      console.log('Beranda ini dijalankan');
      setData(await response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onPressRecipe = item => {
    navigation.navigate('Resep', {item});
  };

  const renderRecipes = ({item}) => (
    <TouchableOpacity onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <ImageBackground style={styles.photo} source={{uri: item.image}}>
          <View style={{position: 'absolute', bottom: 0}}>
            <Text style={[styles.title]}>{item.title}</Text>
            <View
              style={{
                borderColor: '#fff',
                borderWidth: 2,
                marginLeft: '12.5%',
                marginRight: '20%',
              }}
            />
            <Text style={styles.category}>
              {getCategoryName(item.categoryId)}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={data.results}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default BerandaScreen;

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
});
