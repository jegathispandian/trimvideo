import React from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import { DrawerNavigator,TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import AnimatedScreen from '../screens/animatedscreen';
 import videotrim from '../screens/Videotrim';
 import library from '../screens/Library';

export default StackNavigator({
    homepage: { screen: AnimatedScreen },
     videotrim: { screen: videotrim },
     Library: { screen: library },
},
      {
        initialRouteName: 'homepage',
      }
);
  