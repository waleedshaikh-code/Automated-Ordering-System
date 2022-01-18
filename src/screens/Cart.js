import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.rootReducer.cart);
  console.log(cart);
  return (
    <View>
      <Text>cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
