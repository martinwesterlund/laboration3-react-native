import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Brightness from 'expo-brightness';

function BrightnessComp() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      console.log(status)
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(0.5);
      }
    })();
  }, []);

  function lowerBrightness(){
    console.log('sink')
    Brightness.setBrightnessAsync(0.1)
  }

  function higherBrightness(){
    Brightness.setBrightnessAsync(1)
  }


  return (
    <View
      style={styles.container}>
      <Button color='green' title='Get lower brightness' onPress={() => lowerBrightness()}></Button>
      <Button title='Get higher brightness' onPress={() => higherBrightness()}></Button>
    </View>
  );
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
export default BrightnessComp