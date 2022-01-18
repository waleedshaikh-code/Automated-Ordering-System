import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

const items = [
  {
    image: require('../../assets/images/output-onlinepngtools.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/softdrink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/ice.png'),
    text: 'Ice-Cream',
  },
  {
    image: require('../../assets/images/bakery.png'),
    text: 'Dessert',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/tea.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Shake',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'center',
              }}
            />
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
