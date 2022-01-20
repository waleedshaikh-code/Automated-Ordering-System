import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Circle,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';
import {TouchableOpacity} from 'react-native-gesture-handler';

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

let Map = () => {
  //start
  const [cL, setCL] = useState({});
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iphone', response);

      if (request === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('android is ', response);
      //   locateCurrentPosition();
      //   console.log(request());
      if (response === 'granted') {
        locateCurrentPosition();
      }
    }
  };
  ///end
  let locateCurrentPosition = () => {
    console.log('running locate current pos');

    Geolocation.getCurrentPosition(
      position => {
        console.log(JSON.stringify(position));

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        };
        setCL(position.coords || initialPosition);
        const dist = calcCrow(
          24.924344, //restraunt.long
          67.083973, //restraunt.lat
          cL?.latitude,
          cL?.longitude,
        );

        dist * 1000 > 1500 //range radius
          ? Alert.alert('Not Allowed ')
          : Alert.alert('Allowed');
      },
      error => console.log(error),
      //   {enableHighAccuracy: true},
    );
  };

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'red'}}>
          MAP
        </Text>
      </View>

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => (_map = map)}
          showsUserLocation={true}
          // zoomEnabled={true}
          // fitToCordinate={locateCurrentPosition}
          // initialRegion={initialRegion}
          // onMapReady={goToInitialRegion.bind()}
          style={styles.map}>
          <Circle
            center={{latitude: 24.924344, longitude: 67.083973}}
            radius={1500}
            fillColor={'rgba(200,300,200,0.5)'}></Circle>
          <Marker coordinate={cL} title={'Iqra University'}></Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 650,
    width: 400,
    marginTop: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
