import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {connect, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {removeFromCart} from '../rootSlice';
import RestaurantDetail from './RestaurantDetail';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import CartItem from '../components/home/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState();
  const [price, setPrice] = useState(0);
  const cart = useSelector(state => state.rootReducer.cart);
  console.log('THis cart is printing', cart);
  

  return (
    <View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: '100%',
            marginTop: 10,
          }}>
          <Text style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>
            CART ITEM
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingTop: 20,
            marginBottom: 20,
          }}>
          <TextInput
            onChangeText={text => setPhone(text)}
            keyboardType={'numeric'}
            style={{
              width: '80%',
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 100,
              paddingLeft: 15,
            }}
            placeholder="Phone"
          />
        </View>
        {cart.map((e, i) => (
          <CartItem e={e} i={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
