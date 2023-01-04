import React, {useLayoutEffect, useState} from 'react';
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

const BerandaScreen = props => {
  const {navigation} = props;

  const onPressRecipe = item => {
    navigation.navigate('MainApp', {}, {item});
  };
  
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  const [shadowRadius, setShadowRadius] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0.1);

  const renderRecipes = ({item}) => (
    <TouchableOpacity 
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <ImageBackground style={styles.photo} source={{uri: item.photo_url}}>
          <View style={{position:'absolute', bottom:0}}> 
            <Text style={[styles.title]}>{item.title}</Text>
            <View
                style={{
                  borderColor: '#fff',
                  borderWidth: 2,
                  marginLeft: '12.5%',
                  marginRight: '20%'
                }}
              />
            <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
          </View> 
        </ImageBackground>
      </View>
      
    
    </TouchableOpacity >
    
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
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
