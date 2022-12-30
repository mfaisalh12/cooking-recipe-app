import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const zoom = new Animated.Value(0);

  Animated.timing(zoom, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                scale: zoom,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
  },
  image: {
    width: '100%',
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
  },
});
