import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
// import Categories from '../components/Categories';
import HeaderTab from '../components/home/HeaderTab';
import SearchBar from '../components/home/SearchBar';
import RestaurantItem from '../components/home/RestaurantItem';
import {localRestaurants} from '../components/home/RestaurantItem';

const Home = ({navigation}) => {
  const [restaurantData, setrestaurant] = useState(localRestaurants);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Categories /> */}
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
