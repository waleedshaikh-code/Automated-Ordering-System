import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Categories from '../components/home/Categories';
import SearchBar from '../components/home/SearchBar';
import HeaderTab from '../components/home/HeaderTab';
import ReataurantItem from '../components/home/RestaurantItem';
import Home from './Home';
import AddFood from './AddFood';
import firestore from '@react-native-firebase/firestore';
import {ScrollView} from 'react-native-gesture-handler';

// export const foods = [
//   {
//     foodName: 'Lasagna',
//     about: 'With butter lettuce, tomato and sauce bechamel',
//     price: 'PKR:450',
//     image_url: require('../assets/images/biryani.jpg'),
//   },
//   {
//     foodName: 'Lasagna',
//     about: 'With butter lettuce, tomato and sauce bechamel',
//     price: 'PKR:450',
//     image_url: require('../assets/images/biryani.jpg'),
//   },
//   {
//     foodName: 'Lasagna',
//     about: 'With butter lettuce, tomato and sauce bechamel',
//     price: 'PKR:450',
//     image_url: require('../assets/images/biryani.jpg'),
//   },
//   {
//     foodName: 'Lasagna',
//     about: 'With butter lettuce, tomato and sauce bechamel',
//     price: 'PKR:450',
//     image_url: require('../assets/images/biryani.jpg'),
//   },
// ];

const SignedIn = ({navigation}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('Foods')
        // .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const {image_url, name, price, about} = doc.data();
            list.push({
              // image_url: require('../../assets/images/bakery.png'),
              // categories: ['Cafe', 'Bar'],
              name,
              image_url,
              price,
              about,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const Card = ({food}) => {
    return (
      <ScrollView style={{}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '',
            borderBottomColor:'grey',
            borderTopWidth:1, 
            
        //  margin:20,
         }}>
          <View style={{}}>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={{uri: food.image_url}}
            />
          </View>

          <View style={{paddingRight: 90, paddingVertical: 5, paddingTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color:'black'}}>{food.name}</Text>
            <Text>{food.about}</Text>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{color:'red', fontWeight:'700', fontSize:17}}>{food.price}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View>
      <HeaderTab />
      <View style={{paddingHorizontal: 20}}>
        <SearchBar />
      </View>

      {/* <View>
        <Card />
      </View> */}

      <FlatList data={posts} renderItem={({item}) => <Card food={item} />} 
      maxHeight={600}/>
      <TouchableOpacity onPress={() => navigation.navigate('AddFood')}>
        <View
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column-reverse',
            
          }}>
          <View
            style={{
              backgroundColor: '#f44336',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              right:25,
              bottom:25,
              position:'absolute'
              
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>+</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignedIn;

const styles = StyleSheet.create({});
