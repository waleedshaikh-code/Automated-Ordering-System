import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import Navigation from './src/navigation/Navigation';
import AdminHome from './src/screens/AdminHome';
import RestaurantDetail from './src/screens/RestaurantDetail';
import AddFood from './src/screens/AddFood';
import AdminLogin from './src/screens/AdminLogin';
import MenuItems from './src/components/restaurantDetail/MenuItems';
import About from './src/components/restaurantDetail/About';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
