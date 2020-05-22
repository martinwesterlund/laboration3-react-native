import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

function AlertComp() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Hello",
      "How are you?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK" }
      ],
      { cancelable: false }
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Hello again",
      "How are you now?",
      [
        {
          text: "Ask me later"
        },
        {
          text: "Not ok",
          style: "cancel"
        },
        { text: "Great!" }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title={"Two buttons"} onPress={createTwoButtonAlert} />

      <Button title={"Three buttons"} onPress={createThreeButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#e1a400'
  }
})

export default AlertComp