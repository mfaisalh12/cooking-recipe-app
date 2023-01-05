import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import src page
import {Kategori, ResepList, Resep} from '../pages';

const KategoriStack = createNativeStackNavigator();

const KategoriRouter = () => {
  return (
    <KategoriStack.Navigator>
      <KategoriStack.Screen
        name="Kategori"
        component={Kategori}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {backgroundColor: '#FB9300'},
        }}
      />
      <KategoriStack.Screen
        name="ResepList"
        component={ResepList}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {backgroundColor: '#FB9300'},
          headerBackVisible: true,
          headerTintColor: 'white',
        }}
      />
      <KategoriStack.Screen
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
    </KategoriStack.Navigator>
  );
};

export default KategoriRouter;

const styles = StyleSheet.create({});
