import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Categories from './Categories';

// export const localRestaurants = [
//   {
//     name: 'Biryani',
//     // image_url: require('../../assets/images/bakery.png'),
//     image_url: require('../../assets/images/biryani.jpg'),
//     categories: ['Cafe', 'Bar'],
//     price: 'RS-150',
//     reviews: 1244,
//     rating: 4.5,
//   },
//   {
//     name: 'Biryani',
//     // image_url: require('../../assets/images/bakery.png'),
//     image_url: require('../../assets/images/bg2.jpg'),
//     categories: ['Cafe', 'Bar'],
//     price: 'RS-150',
//     reviews: 1244,
//     rating: 4.5,
//   },
//   {
//     name: 'Biryani',
//     // image_url: require('../../assets/images/bakery.png'),
//     image_url: require('../../assets/images/bread.png'),
//     categories: ['Cafe', 'Bar'],
//     price: 'RS-150',
//     reviews: 1244,
//     rating: 4.5,
//   },
// ];

const ReataurantItem = ({navigation, ...props}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [deleted, setDeleted] = useState(false);

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
              rating: 4.5,
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
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('RestaurantDetail', food)}>
        <View style={{padding: 15, backgroundColor: '#fff', marginTop: 10}}>
          <View>
            <Image
              // source={food.image_url}
              source={{uri: food.image_url}}
              style={{height: 180, width: '100%'}}
            />
          </View>
          <Restaurantinfo name={food.name} about ={food.about} rating={food.rating} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{height: 500}}>
      <Categories />
      <FlatList
        data={posts}
        renderItem={({item}) => <Card food={item} maxHeight={300} />}
      />
      </View> 
    </>
  );
};

const Restaurantinfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'grey'}}>{props.about}</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text style={{fontWeight: 'bold'}}>{props.rating}</Text>
    </View>
  </View>
);

export default ReataurantItem;

// {
//   name: 'Burger',
//   image_url:
//     'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x500.jpg',
//   categories: ['Indian', 'Bar'],
//   price: '$$',
//   reviews: 700,
//   rating: 4.9,
// },
// {
//   name: 'Pizza',
//   image_url:
//     'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
//   categories: ['Cafe', 'Bar'],
//   price: '$$',
//   reviews: 1244,
//   rating: 3.7,
// },
// {
//   name: 'Pizza',
//   image_url:
//     'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
//   categories: ['Cafe', 'Bar'],
//   price: '$$',
//   reviews: 1244,
//   rating: 3.7,
// },

// const RestaurantImage = props => (
//   <>
//     <Image
//       source={{
//         uri: props.image,
//       }}
//       style={{width: '100%', height: 180}}
//     />
//     <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
//       <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
//     </TouchableOpacity>
//   </>
// );

// const ReataurantItem = ({navigation, ...props}) => {
//   return (
//     <>
//       <ScrollView style={{height: 500}}>
//         <Categories />
//         {props.restaurantData.map((restaurant, index) => (
//           <TouchableOpacity
//             activeOpacity={1}
//             onPress={() => navigation.navigate('RestaurantDetail', restaurant)}>
//             <View
//               key={index}
//               style={{padding: 15, backgroundColor: '#fff', marginTop: 10}}>
//               <View>
//                 <Image
//                   source={restaurant.image_url}
//                   style={{height: 180, width: '100%'}}
//                 />
//                 {/* <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
//                   <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
//                 </TouchableOpacity> */}
//               </View>
//               {/* <RestaurantImage image={restaurant.image_url} /> */}
//               <Restaurantinfo
//                 name={restaurant.name}
//                 rating={restaurant.rating}
//               />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </>
//   );
// };
