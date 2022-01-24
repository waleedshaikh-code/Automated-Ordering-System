import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';

import SearchBar from '../components/home/SearchBar';
import HeaderTab from '../components/home/HeaderTab';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import Icon from 'react-native-vector-icons/MaterialIcons';

const SignedIn = ({navigation}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newsList, setNewsList] = useState('');
  const [deleted, setDeleted] = useState(false);
  // const [load, setLoad]=useState(true)

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('Foods')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const {image_url, name, price, about} = doc.data();
            list.push({
              id: doc.id,
              name,
              image_url,
              price,
              about,
            });
          });
        });

      setPosts(list);
      console.log('adminhome', list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = postId => {
    console.log('post id  ', postId);
    firestore()
      .collection('Foods')
      .doc(postId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const {image_url} = documentSnapshot.data();

          if (image_url != null) {
            const storageRef = storage().refFromURL(image_url);
            const imageRef = storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${image_url} has been deleted successfully.`);
                deleteFirestoreData(postId);
              })
              .catch(e => {
                console.log('Error while deleting the image. ', e);
              });
            // If the post image is not available
          } else {
            deleteFirestoreData(postId);
          }
        }
      });
  };

  const deleteFirestoreData = postId => {
    firestore()
      .collection('Foods')
      .doc(postId)
      .delete()
      .then(() => {
        // Alert.alert(
        //   'Post deleted!',
        //   'Your post has been deleted successfully!',
        // );
      })
      .catch(e => console.log('Error deleting posst.', e));
  };

  const handleDelete = postId => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deleteData(postId),
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const Card = ({food, onDelete}) => {
    return (
      <ScrollView style={{}}>
        <View
          style={{
            marginTop: 2,
            marginVertical: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderBottomColor: 'grey',
            borderTopWidth: 1,
            marginHorizontal: 30,
          }}>
          <View style={{}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 50}}
              source={{uri: food.image_url}}
            />
          </View>

          <View style={{paddingRight: 60, paddingVertical: 5, paddingTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              {food.name}
            </Text>
            <Text>{food.about}</Text>
          </View>

          <Icon
            name="delete"
            size={28}
            style={{right: 20, top: 10, position: 'absolute'}}
            onPress={() => onDelete(food.id)}
          />
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{color: 'red', fontWeight: '700', fontSize: 17}}>
              {food.price}
            </Text>
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

      <FlatList
        data={posts}
        renderItem={({item}) => <Card food={item} onDelete={handleDelete} />}
        onRefresh={() => fetchPosts()}
        refreshing={loading}
        maxHeight={600}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddFood')}>
        <View
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column-reverse',
            marginRight: 30,
          }}>
          <View
            style={{
              backgroundColor: '#f44336',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              // right: 25,
              // bottom: 25,
              position: 'absolute',
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
