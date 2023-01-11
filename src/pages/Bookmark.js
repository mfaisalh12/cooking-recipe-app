import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Component
import BookMarkBtn from '../components/BookMarkBtn';

const Bookmark = () => {
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    getData();
  }, [bookmark.length]);

  const getData = async () => {
    console.log('get data berjalan');
    let keys = [];
    let bookmarkData = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      const data = await AsyncStorage.multiGet(keys);
      if (data !== null) {
        data.map(val => {
          bookmarkData.push(JSON.parse(val[1]));
        });
        setBookmark(bookmarkData);
      }
    } catch (e) {
      Alert.alert('Error', 'No data found');
    }
  };

  const renderBookmark = ({item}) => (
    <TouchableOpacity
      style={{
        marginRight: 10,
        backgroundColor: '#fff',
        elevation: 3,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 8,
        marginLeft: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#A35709',
            fontSize: 18,
            fontWeight: 'bold',
            paddingTop: 8,
          }}>
          {item.title}
        </Text>
        <BookMarkBtn
          name={item.bookmark ? 'bookmark' : 'bookmark-outline'}
          onPress={async () => {
            setBookmark(current => current.filter(mark => mark.id !== item.id));
            await AsyncStorage.removeItem(`bookMarkData-${item.id}`);
          }}
        />
      </View>
      <Image
        source={{uri: item.image}}
        style={{
          width: 300,
          height: 150,
          marginBottom: 8,
          borderRadius: 3,
          marginTop: 10,
        }}
        resizemode={'cover'}
      />
      <Text
        style={{
          color: '#ff4500',
          fontsize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          width: 300,
        }}>
        {item.cuisines != '' ? item.cuisines.join(', ') : 'Common'}
      </Text>
      <Text
        style={{
          color: '#212121',
          fontsize: 18,
          textAlign: 'center',
          width: 300,
          marginTop: 20,
          color: '#212121',
          fontSize: 14,
          textAlign: 'center',
          paddingBottom: 10,
          fontWeight: '500',
        }}>
        <Image
          style={{width: 10, height: 10}}
          source={require('../assets/icons/time.png')}
        />
        {item.readyInMinutes}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#E8EAED',
      }}>
      <FlatList
        data={bookmark}
        showsVerticalScrollIndicator={false}
        style={{marginLeft: 10}}
        renderItem={renderBookmark}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({});
