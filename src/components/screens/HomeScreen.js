import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Font } from 'expo';
import PostFeed from '../container/PostFeed';
import LogoTitle from '../container/LogoTitle';

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },

  navigationBar: {
    width: `${100}%`,
    height: 40,
    marginTop: 0,
    borderBottomColor: 'rgb(233, 233, 233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: <LogoTitle />,
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <View style={{ flex: 1, width: `${100}%`, height: `${100}%` }}>
          <PostFeed navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}
