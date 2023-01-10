import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon2 from 'react-native-vector-icons/Entypo';
// import src page
import {Beranda, Resep, Ingredient} from '../pages';

const BerandaStack = createNativeStackNavigator();

const BerandaRouter = () => {
  return (
    <BerandaStack.Navigator>
      <BerandaStack.Screen
        name="Beranda"
        component={Beranda}
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
      <BerandaStack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerShown: true,
          // headerTitleAlign: 'right',
          // headerTitleStyle: {
          //   color: '#FF8303',
          //   fontSize: 20,
          //   fontWeight: '400',
          // },
          headerStyle: {backgroundColor: 'transparent'},
          
        }}
      />
      <BerandaStack.Screen
        name="Ingredient"
        component={Ingredient}
      />
    </BerandaStack.Navigator>
  );
};

export default BerandaRouter;

const styles = StyleSheet.create({});
