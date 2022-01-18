import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../const/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cart from './Cart';

// import ViewCart from '../components/home/ViewCart';
import {useDispatch} from 'react-redux';
import {addToCart} from '../rootSlice';

export const localRestaurants = [
  {
    name: 'Biryani',
    // image_url: require('../../assets/images/bakery.png'),
    categories: ['Cafe', 'Bar'],
    price: 'RS-150',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Biryani',
    // image_url: require('../../assets/images/bakery.png'),
    categories: ['Cafe', 'Bar'],
    price: 'RS-150',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Biryani',
    // image_url: require('../../assets/images/bakery.png'),
    categories: ['Cafe', 'Bar'],
    price: 'RS-150',
    reviews: 1244,
    rating: 4.5,
  },
];

function RestaurantDetail({navigation, route}) {
  const restaurant = route.params;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon
          name="shopping-cart"
          size={28}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <View style={styles.imageConatainer}>
        <Image
          source={{uri: restaurant.image_url}}
          style={{width: '100%', height: 280}}
        />
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
            Best Choice
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            {restaurant.name}
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {restaurant.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            About
          </Text>
          <Text>{restaurant.about}</Text>
          {/* <Text style={{ marginTop: 10, color: 'grey', lineHeight: 20, fontSize: 16 }}>{plant.about}</Text> */}

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText} onPress={deccrement}>
                  -
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                {count}
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText} onPress={increment}>
                  +
                </Text>
              </View>
            </View> */}

            <TouchableOpacity
              style={styles.buyBtn}
              onPress={() => {
                dispatch(addToCart(restaurant));
                navigation.navigate(Cart);
              }}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RestaurantDetail;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageConatainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 30,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    left: 40,
    top: 80,
    width: '80%',
  },
});
