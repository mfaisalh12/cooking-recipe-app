import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {BgIntro, Intro1} from '../assets';

function IntroScreen({navigation}) {
  const {height, width} = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FF8303" barStyle="light-content" />
      <ImageBackground source={BgIntro} style={{height: height}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btnWhite}
            onPress={() => navigation.navigate('Splash')}>
            <Text style={styles.btnTextOrange}>Lewati</Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            Temukan Berbagai Resep Masakan Dengan Mudah
          </Text>
          <Image source={Intro1} style={styles.imgIntro} />

          <TouchableOpacity style={styles.btnOrange} onPress="">
            <Text style={styles.btnTextWhite}>Selanjutnya</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  btnWhite: {
    backgroundColor: '#fff',
    marginVertical: 20,
    marginEnd: 10,
    alignSelf: 'flex-end',
    width: 80,
    paddingVertical: 5,
    borderRadius: 6,
  },
  btnTextOrange: {
    color: '#FB9300',
    textAlign: 'center',
  },
  btnOrange: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#FB9300',
    width: '100%',
    paddingVertical: 8,
    borderRadius: 6,
  },
  btnTextWhite: {
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
  },
  imgIntro: {
    width: '100%',
    marginTop: 60,
  },
});
