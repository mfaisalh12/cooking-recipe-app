import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

import {SplashImage} from '../assets';

function SplashScreen({navigation}) {
  const {height, width} = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Intro');
    }, 3000);
  }, [navigation]);

  return (
    <View>
      <StatusBar hidden={true} />
      <Image source={SplashImage} style={{width: width, height: height}} />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({});
