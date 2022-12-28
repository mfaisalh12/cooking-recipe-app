import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Destinasi = ({navigation}) => {
  const [dataTrending, setdataTrending] = useState([
    {
      namawisata: 'Gorengan',
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      namawisata: 'Roti',
      image:
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    },
    {
      namawisata: 'Salat',
      image:
        'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      namawisata: 'Salat + Sayur',
      image:
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      namawisata: 'kue madu',
      image:
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#E8EAED',
      }}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 2,
          marginTop: 2,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}  >
        <Iconicons name="chevron-back-outline" size={25} color="#900" />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <FlatList
          data={dataTrending}
          showsVerticalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item}) => (
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
              <Image
                source={{uri: item.image}}
                style={{
                  width: 300,
                  height: 150,
                  marginBottom: 5,
                  borderRadius: 3,
                  marginTop: 5,
                }}
                resizemode={'cover'}
              />
              <Text
                style={{
                  color: '#212121',
                  fontsize: 18,
                  fontWeight: 'bold',
                }}>
                {item.namawisata}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Destinasi;


const styles = StyleSheet.create({});
