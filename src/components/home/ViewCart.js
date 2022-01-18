import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const viewCart = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        zIndex: 999,
      }}>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>viewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default viewCart;

const styles = StyleSheet.create({});
