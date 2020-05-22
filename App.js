import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import BrightnessComp from './screens/BrightnessComp'
import DistComponent from './screens/DistComponent'
import CameraComp from './screens/CameraComp'
import AlertComp from './screens/AlertComp'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar hidden={true}></StatusBar>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'Brightness fun') {
                iconName = focused ? 'ios-sunny' : 'ios-sunny';
              } else if (route.name === 'Distance calculator') {
                iconName = focused ? 'ios-calculator' : 'ios-calculator';
              } else if (route.name === 'Camera') {
                iconName = focused ? 'ios-camera' : 'ios-camera';
              } else if (route.name === 'Alert') {
                iconName = focused ? 'ios-alert' : 'ios-alert';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          defaultNavigationOptions={{
            header: null
          }}
          tabBarOptions={{
            activeTintColor: '#e1a400',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 12
            },
            style: {
              height: 70,
              backgroundColor: '#390087',
              paddingBottom: 10,
              paddingTop: 10
            }
          }}

        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Brightness fun" component={BrightnessComp} />
          <Tab.Screen name="Distance calculator" component={DistComponent} />
          <Tab.Screen name="Camera" component={CameraComp} />
          <Tab.Screen name="Alert" component={AlertComp} />
        </Tab.Navigator>
      </NavigationContainer>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#e1a400'
  }
});

export default App;
