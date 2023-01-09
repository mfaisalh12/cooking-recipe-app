import {StyleSheet, Dimensions} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const CardSearch = StyleSheet.create({
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
