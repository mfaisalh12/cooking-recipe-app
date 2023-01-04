import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 487;
const RECIPE_ITEM_MARGIN = 22;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginRight: RECIPE_ITEM_MARGIN,
    marginTop: 23,
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    // height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 35,
    shadowColor: "black",
    backgroundColor: "#fff",
    position:'relative'
  },
  photo: {
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    width: '100%',
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 35,
    overflow: 'hidden',
    
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0
  },
  title: {
    flex: 3,
    fontSize: 32,
    fontWeight: '800',
    // lineHeight:50,
    // textAlign: 'center',
    // justifyContent:'flex-end',
    color: '#ffffff',
    // marginTop: '70%',
    marginRight: 5,
    marginLeft: 33,
    // borderWidth:1,
    paddingRight: 100,
  },
  category: {
    flex: 1,
    // justifyContent:'flex-end',
    marginTop: 5,
    marginBottom: '15%',
    marginLeft: 33,
    fontSize: 20,
    fontWeight: '400',
    color: '#FB9300',
    // borderWidth:1
  }
});
