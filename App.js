import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './src/components/screens';
import ProfileScreen from './src/components/screens/ProfileScreen';
import PostFeed from './src/components/container/PostFeed';
import LogoTitle from './src/components/container/LogoTitle';

// const ProfileScreen = StackNavigator({
//   profile: {
//     screen: ProfileScreen,
//   },
// });

const RootStack = StackNavigator({
  home: {
    screen: HomeScreen,
  },
  postFeed: {
    screen: PostFeed,
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

