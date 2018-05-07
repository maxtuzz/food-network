import React, { Component } from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import { HomeScreen } from './src/components/screens';
import ProfileScreen from './src/components/screens/ProfileScreen';

// const ProfileScreen = StackNavigator({
//   profile: {
//     screen: ProfileScreen,
//   },
// });

const RootStack = StackNavigator({
  home: {
    screen: HomeScreen,
  },
  profile: {
    screen: ProfileScreen,
  },
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

