import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import src page
import {Search, Resep} from '../pages';

const SearchStack = createNativeStackNavigator();

const SearchRouter = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: '#FF8303',
            fontSize: 20,
            fontWeight: '400',
          },
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
      <SearchStack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: '#FF8303',
            fontSize: 20,
            fontWeight: '400',
          },
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchRouter;

const styles = StyleSheet.create({});
