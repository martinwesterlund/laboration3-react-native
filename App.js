import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import BrightnessComp from './screens/BrightnessComp'
import DistComponent from './screens/DistComponent'

const Stack = createStackNavigator();

function App() {
  return (
   
      <NavigationContainer >
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen style={styles.container} name="Brightness fun" component={BrightnessComp} />
          {/* <Stack.Screen name="Distance calculator" component={DistComponent} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#e1a400'
  }

  // text: {
  //   color: '#fff',
  //   fontSize: 30,
  //   fontWeight: 'bold'
  // },

  // img: {
  //   height: 100,
  //   width: 100,
  //   borderRadius: 50
  // },

});

export default App;
