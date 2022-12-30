import React, {useState} from 'react';
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

import Slider from '../components/Slider';

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
  const [count, setCount] = useState(0);
  const {height} = useWindowDimensions();
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
          {/* <Text style={styles.title}>
            Temukan Berbagai Resep Masakan Dengan Mudah
          </Text>
          <Image source={Intro1} style={styles.imgIntro} /> */}
          <Slider data={data} />
          <TouchableOpacity
            style={styles.btnOrange}
            onPress={() => setCount(count + 1)}
            disabled={count >= 3 ? true : false}>
            <Text style={styles.btnTextWhite}>{count}</Text>
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
