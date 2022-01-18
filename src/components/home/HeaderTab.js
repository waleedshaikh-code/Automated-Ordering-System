import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderTab = () => {
  return (
    <View
      style={{flexDirection: 'row', alignSelf: 'center', paddingVertical: 15}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: '#f44336'}}>
        AUTOMATED ORDERING SYSTEM
      </Text>
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({});
