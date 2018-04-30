import React from 'react';
import {SafeAreaView} from 'react-native';
import InstaClone from './src/InstaClone';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <InstaClone />
      </SafeAreaView>
    );
  }
}

