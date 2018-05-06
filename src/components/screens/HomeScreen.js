import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Font } from 'expo';
import PostFeed from '../container/PostFeed';

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
  constructor() {
    super();

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    this.loadAssets();
  }

  async loadAssets() {
    await Font.loadAsync({
      'noodle-font': require('../../../assets/fonts/noodle.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{ flex: 1, width: `${100}%`, height: `${100}%` }}>
        <View style={styles.navigationBar}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'noodle-font', fontSize: 30 }}>
                Noodle
              </Text>
            ) : null
          }
        </View>

        <PostFeed />
      </View>
    );
  }
}
