import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from '../data/MockDataAPI';
import BackButton from '../components/BackButton/BackButton';
import ViewIngredientsButton from '../components/ViewIngredientsButton/ViewIngredientsButton';

import axios from 'axios';
import {API_KEY} from '@env';

const {width: viewportWidth} = Dimensions.get('window');

export default function RecipeScreen(props) {
  const {navigation, route} = props;
  const [data, setData] = useState();

  const item = route.params?.item;

  useLayoutEffect(() => {
    dataAPI();
    navigation.setOptions({
      headerTransparent: 'true',
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const dataAPI = async () => {
    const url = `https://api.spoonacular.com/recipes/${item.id}/information`;
    const config = {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.get(url, config);
      console.log('Resep dijalankan');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.imageContainer}>
          {/* carousel */}
          <Swiper
            style={styles.paginationContainer}
            activeDotColor="#FB9300"
            loop={true}>
            <View style={styles.slider}>
              <Image
                source={{uri: data && data.image}}
                style={[styles.image, {borderWidth: 1}]}
              />
            </View>
          </Swiper>
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{data && data.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RecipesList', {category, title})
            }>
            <Text style={styles.category}>
              {data && data.cuisines.join(', ')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require('../assets/icons/time.png')}
          />
          <Text style={styles.infoRecipe}>
            {data && data.readyInMinutes} minutes{' '}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = data ? data.extendedIngredients : '';
              let title = 'Ingredients for ' + data ? data.title : '';
              navigation.navigate('Ingredient', {ingredients, title});
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{fontWeight: 'bold'}}>Step Instructions :</Text>
          {data &&
            data.analyzedInstructions[0].steps.map((val, key) => {
              return (
                <View
                  key={key}
                  style={{
                    flexDirection: 'row',
                    marginTop: 2,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{val.number}.</Text>
                  <Text style={{fontWeight: '600', marginLeft: 10}}>
                    {val.step}
                  </Text>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  carouselContainer: {
    minHeight: 370,
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 368,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250,
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#FF8303',
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    margin: 15,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
