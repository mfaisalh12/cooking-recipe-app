import { StyleSheet, Dimensions } from 'react-native';

// 2 photos per width
export const CardSearch = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 23,
    width : 180,
    height : 210,
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    // height: RECIPE_ITEM_HEIGHT + 75,
    borderRadius: 35,
    shadowColor: "black",
    backgroundColor: "#FF8303",
    position:'relative'
  },
  photo: {
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    width: 180,
    height: 130,
    borderRadius: 35,
    overflow: 'hidden',
    
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0
  },
  title: {
    flex: 3,
    fontWeight: 50,
    // lineHeight:50,
    // textAlign: 'center',
    // justifyContent:'flex-end',
    color: '#ffffff',
    // marginTop: '70%',
    // borderWidth:1,
    alignItems: 'center',
    textAlign: 'center',
    marginTop : 5,
  },
  category: {
    flex: 1,
    // justifyContent:'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    // borderWidth:1
  }
});