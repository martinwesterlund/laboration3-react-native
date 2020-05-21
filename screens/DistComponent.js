import React, { useState, useEffect } from 'react'
import { Platform, Text, View, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { getPreciseDistance } from 'geolib';
import * as Location from 'expo-location';

const DistComponent = () => {
    const [myCoords, setMyCoords] = useState({ longitude: null, latitude: null })
    const [myLocation, setMyLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const [destinationCoords, setDestinationCoords] = useState()

    const [distance, setDistance] = useState(null)

    const [query, setQuery] = useState()
    const [destination, setDestination] = useState()

    const onChange = textValue => setQuery(textValue)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
            let location = await Location.getCurrentPositionAsync({});
            let text = 'Waiting..';
            if (errorMsg) {
                text = errorMsg;
            } else if (location) {
                console.log(location)
                setMyCoords({ latitude: location.coords.latitude, longitude: location.coords.longitude })
            }

        })();
    }, [])

    useEffect(() => {
        if (myCoords && destinationCoords) {
            var pdis = getPreciseDistance(
                myCoords,
                destinationCoords
            )
            setDistance(pdis / 1000)
        }

    }, [destinationCoords])

    useEffect(() => {
        if(myCoords){
fetch(`https://geocode.xyz/${myCoords.latitude},${myCoords.longitude}?geoit=json`)
            .then(response => response.json())
            .then(result => {
                setMyLocation({ city: result.city, address: result.staddress, stnumber: result.stnumber, country: result.country })
            })
        }
        
    }, [myCoords])


    function getDestinationCoords(query) {
        fetch(`https://geocode.xyz/${query}?json=1`)
            .then(response => response.json())
            .then(result => {
                setDestinationCoords({ latitude: result.latt, longitude: result.longt })
                setDestination(`${query}, ${result.standard.countryname}`)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calculate distance to other destination</Text>
            {myLocation && <Text style={styles.textSmall}>Your location: {myLocation.address} {myLocation.stnumber}, {myLocation.city}, {myLocation.country}</Text>}
            <TextInput style={styles.input} placeholder='Add destination...' placeholderTextColor={'blue'} onChangeText={onChange} />
            <Button title='Get distance!' onPress={() => getDestinationCoords(query)} />
            {distance && destinationCoords && <Text style={styles.textSmall}>Distance to {destination}: {distance} km</Text>}
        </View>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 60,
        width: 300,
        padding: 8,
        margin: 10,
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        borderWidth: 1,
        backgroundColor: '#fff'
    },

    text: {
        color: 'darkblue',
        fontSize: 24,
        textAlign: 'center',
        margin: 20,
        fontWeight: 'bold'
    },
    textSmall: {
        color: 'darkblue',
        fontSize: 18,
        textAlign: 'center',
        margin: 20,
        fontWeight: 'bold'
    },
})

export default DistComponent