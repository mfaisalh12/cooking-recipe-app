import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import src page
import {Splash, Beranda, Kategori, Search, Bookmark, ResepList} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Kategori" component={Kategori} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Resep"
        component={Resep}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="ResepList"
        component={ResepList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
