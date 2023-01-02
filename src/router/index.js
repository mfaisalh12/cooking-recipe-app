import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import src page
import {
  Splash,
  Intro,
  Beranda,
  Kategori,
  Search,
  Bookmark,
  ResepList,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{headerTitleAlign: 'center', headerTitleStyle: {
              color: '#fff',
            },headerStyle: {backgroundColor: '#FB9300'}}} />
      <Tab.Screen name="Kategori" component={Kategori} options={{headerTitleAlign: 'center', headerTitleStyle: {
              color: '#fff',
            },headerStyle: {backgroundColor: '#FB9300'}}} />
      <Tab.Screen name="Search" component={Search} />
<<<<<<< HEAD
      <Tab.Screen 
        name="Bookmark" 
        component={Bookmark}
        options={{
          title: 'aku',
        }}
          />
=======
      <Tab.Screen name="Bookmark" component={Bookmark} options={{headerTitleAlign: 'center', headerTitleStyle: {
              color: '#fff',
            },headerStyle: {backgroundColor: '#FB9300'}}} />
>>>>>>> 71b1a2516322d6763d1a6664a2f40d0ccaadca54
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      /> */}
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
