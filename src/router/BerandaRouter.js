import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import src page
import {Beranda, Resep} from '../pages';

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
          headerStyle: {backgroundColor: '#fff',},
          
        }}
      />
      <BerandaStack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: '#FF8303',
            fontSize: 20,
            fontWeight: '400',
          },
          headerStyle: {backgroundColor: '#fff',},
          
        }}
      />
    </BerandaStack.Navigator>
  );
};

export default BerandaRouter;

const styles = StyleSheet.create({});
