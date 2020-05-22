import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e1a400'
    },  
  btn: {
      color: 'green'
  },
})

export default HomeScreen