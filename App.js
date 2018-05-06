import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import { HomeScreen } from './src/components/screens';
import ProfileScreen from './src/components/screens/ProfileScreen';

const myStack = StackNavigator({
  profile: {
    screen: ProfileScreen,
  },
});

const RootStack = SwitchNavigator({
  home: {
    screen: HomeScreen,
  },
  myStack: {
    screen: myStack,
  },
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <RootStack />
      </SafeAreaView>
    );
  }
}

