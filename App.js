import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { addNavigationHelpers } from 'react-navigation'
import MainNavigation from './Navigation/MainNavigation';

export default class App extends React.Component {

// when the app is closed, remove the event listener

  render() {
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
