import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Platform, Alert, SafeAreaView } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions'


let Map = () => {

    useEffect(() => {
        requestLocationPermission();
    }, [])


    const requestLocationPermission = async () => {
        if (Platform === 'ios') {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log('iphone', response)

            if (request === 'granted') {
                this.locateCurrentPosition();
            }
        } else {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('android is ', response)

            if (request === 'granted') {
                this.locateCurrentPosition();
            }

        }
    }

    let locateCurrentPosition = () => {
        navigator.Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }
                setState({ initialPosition })
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy:true, timeout: 10000, maximumAge: 1000 }
        )
    }

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>MAP</Text>
            </View>

            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => _map = map}
                    showsUserLocation={true}
                    // zoomEnabled={true}
                    // fitToCordinate={locateCurrentPosition}
                    // initialRegion={initialRegion}
                    // onMapReady={goToInitialRegion.bind()}
                    style={styles.map}
                >
                    <Circle
                        center={{ latitude: 24.924344, longitude: 67.083973 }}
                        radius={1000}
                        fillColor={'rgba(200,300,200,0.5)'}

                    >

                    </Circle>
                    <Marker
                        coordinate={{ latitude: 24.924344, longitude: 67.083973 }}
                        title={'Iqra University'}
                    >
                    </Marker>
                </MapView>
            </View>
        </SafeAreaView>
    )
}

export default Map

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
})
