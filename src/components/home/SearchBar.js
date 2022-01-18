import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import localRestaurant from './RestaurantItem'

const SearchBar = () => {

    // const searchUser = (texttoSearch)=>{
    //     var searchWord=localRestaurant;
    //     console.log(searchWord)
    //     searchWord=searchWord.toLowerCase();
    //     if (searchWord.lenght<=0){
    //         Alert.alert("search complete word")
    //         return;
    //     }
    //     var item=[huzaifa, waleed];
    //     var searchitem=[];
    //     for (var x=0; x<item.length; x++){
    //         var title=item[x]
    //         var paragraph=title
    //         var index=paragraph.indexOf(searchWord);
    //         if (index!=1){
    //             return searchitem.push(title)
    //         }
    //     }
    // }

    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                placeholder="search"

                onChangeText={text => {
                    searchUser(text)
                }}

                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}

                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginRight: 8,
                        alignItems: 'center',
                        padding: 9,
                        borderRadius: 30,

                    }}
                    >
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})
