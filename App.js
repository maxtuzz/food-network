import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import SocialFood from './src/SocialFood';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <SocialFood />
      </SafeAreaView>
    );
  }
}

