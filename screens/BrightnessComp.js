import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Brightness from 'expo-brightness';

function BrightnessComp() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(0.5);
      }
    })();
  }, []);

  function lowerBrightness() {
    Brightness.setBrightnessAsync(0.1)
  }

  function mediumBrightness() {
    Brightness.setBrightnessAsync(0.5)
  }

  function higherBrightness() {
    Brightness.setBrightnessAsync(1)
  }

  return (
    <View
      style={styles.container}>
      <Button color='#390087' title='Get lower brightness' onPress={() => lowerBrightness()}></Button>
      <Button color='#990012'title='Get medium brightness' onPress={() => mediumBrightness()}></Button>
      <Button color='#390045'title='Get higher brightness' onPress={() => higherBrightness()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#e1a400'
  },
})

export default BrightnessComp