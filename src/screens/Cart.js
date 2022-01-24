import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {connect, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {removeFromCart} from '../rootSlice';
import RestaurantDetail from './RestaurantDetail';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

const Cart = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const cart = useSelector(state => state.rootReducer.cart);
  console.log('THis cart is printing', cart);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

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
          <View
            key={i}
            style={{
              marginTop: 2,
              marginVertical: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginHorizontal: 30,
            }}>
            <View style={{}}>
              <Image
                style={{width: 80, height: 80, borderRadius: 50}}
                source={{uri: e.image_url}}
              />
            </View>

            <View
              style={{paddingRight: 60, paddingVertical: 5, paddingTop: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                {e.name}
              </Text>
              <Text>{e.about}</Text>
              <Text style={{color: 'red', fontWeight: '700', fontSize: 17}}>
                {e.price}
              </Text>
            </View>

            <Icon
              name="delete"
              size={28}
              style={{right: 20, top: 10, position: 'absolute'}}
              onPress={() => {
                dispatch(removeFromCart(cart));
              }}
            />
            <View
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 50,
              }}>
              <Text
                onPress={increment}
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  marginRight: 15,
                  color: 'black',
                }}>
                -
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'red',
                  marginRight: 15,
                }}>
                {count}
              </Text>
              <Text
                onPress={decrement}
                style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
                +
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
