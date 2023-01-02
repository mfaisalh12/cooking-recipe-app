import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import src page
import {Kategori, ResepList} from '../pages';

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
    </KategoriStack.Navigator>
  );
};

export default KategoriRouter;

const styles = StyleSheet.create({});
