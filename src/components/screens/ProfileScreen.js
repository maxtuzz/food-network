import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: `${100}%`, height: `${100}%` }}>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}> Hey </Text>
      </View>
    );
  }
}
