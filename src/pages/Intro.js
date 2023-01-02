import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

import Swiper from 'react-native-swiper';

import {BgIntro, Intro1, Intro2, Intro3} from '../assets';

const data = [
  {
    id: 1,
    img: Intro1,
    title: 'Temukan Berbagai Resep Masakan Dengan Mudah',
  },
  {
    id: 2,
    img: Intro2,
    title: 'Dapatkan Resep Masakan Di Seluruh Dunia',
  },
  {
    id: 3,
    img: Intro3,
    title: 'Simpan Resep Pilihanmu',
  },
];

function IntroScreen({navigation}) {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <StatusBar backgroundColor="#FF8303" barStyle="light-content" />
      <ImageBackground source={BgIntro} style={{height}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btnWhite}
            onPress={() => navigation.navigate('MainApp')}>
            <Text style={styles.btnTextOrange}>Lewati</Text>
          </TouchableOpacity>

          <Swiper
            showsButtons
            showsPagination={true}
            paginationStyle={styles.pagination}
            loop={false}
            buttonWrapperStyle={styles.buttonWrapperStyle}
            prevButton={<Text style={{display: 'none'}}></Text>}
            nextButton={<Text style={styles.btnNext}>Selanjutnya</Text>}>
            {data.map((item, key) => {
              return (
                <View key={key} style={styles.slider}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image source={item.img} style={styles.imgIntro} />
                </View>
              );
            })}
          </Swiper>
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
    maxHeight: height - 100,
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
  btnNext: {
    bottom: 20,
    backgroundColor: '#FB9300',
    color: '#fff',
    width: width - 50,
    textAlign: 'center',
    paddingVertical: 8,
  },
  btnTextWhite: {
    color: '#fff',
    textAlign: 'center',
  },
  slider: {
    padding: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pagination: {
    bottom: 140,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
  },
  imgIntro: {
    marginTop: 30,
  },
});
