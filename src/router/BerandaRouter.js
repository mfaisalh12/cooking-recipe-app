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
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {backgroundColor: '#FB9300'},
        }}
      />
    </BerandaStack.Navigator>
  );
};

export default BerandaRouter;

const styles = StyleSheet.create({});
