import React from 'react';
import { SafeAreaView } from 'react-native';
import SocialFood from './src/SocialFood';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <SocialFood />
      </SafeAreaView>
    );
  }
}

