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

const {width: viewportWidth} = Dimensions.get('window');

export default function RecipeScreen(props) {
  const {navigation, route} = props;

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  useLayoutEffect(() => {
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

  const renderImage = ({item}) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item}} />
      </View>
    </TouchableHighlight>
  );

  const onPressIngredient = item => {
    var name = getIngredientName(item);
    let ingredient = item;
    navigation.navigate('Ingredient', {ingredient, name});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.imageContainer}>
          {/* carousel */}
          <Swiper
            // showsButtons
            // showsPagination={true}
            style={styles.paginationContainer}
            activeDotColor='#FB9300'
            loop={true}
            // buttonWrapperStyle={styles.buttonWrapperStyle}
            >
            {item.photosArray.map((val, key) => {
              return (
                <View key={key} style={styles.slider}>
                  <Image source={{uri: val}} style={[styles.image,{borderWidth:1,}]}  />
                  {console.log(val)}
                </View>
              );
            })}
          </Swiper>
          {/* <Image style={[styles.image,{borderWidth:1,}]} source={{uri: item.photo_url}} /> */}
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RecipesList', {category, title})
            }>
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require('../assets/icons/time.png')}
          />
          <Text style={styles.infoRecipe}>{item.time} minutes </Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = item.ingredients;
              let title = 'Ingredients for ' + item.title;
              navigation.navigate('Ingredient', {ingredients, title});
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // borderWidth:3
  },
  carouselContainer: {
    minHeight: 370,
    // borderWidth:1,

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
    // borderWidth:1
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
