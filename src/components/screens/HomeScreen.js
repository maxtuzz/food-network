import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';

import PostFeed from '../container/PostFeed';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, width: `${100}%`, height: `${100}%` }}>
          <PostFeed navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}
