import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>This is a useless app</Text>
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
})

export default HomeScreen