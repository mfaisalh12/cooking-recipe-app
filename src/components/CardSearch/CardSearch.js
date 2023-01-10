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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginRight: 5,
    marginTop: 12,
    marginBottom: 10,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#171717',
    backgroundColor: '#FF8303',
  },
  photo: {
    width: '100%',
    height: (RECIPE_ITEM_HEIGHT * 3) / 4,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
});
