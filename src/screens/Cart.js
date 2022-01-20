import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.rootReducer.cart);
  console.log('THis cart is printing', cart);
  return (
    <View>
      {cart.map((e, i) => (
        <Text key={i}>{e.name}</Text>
      ))}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
