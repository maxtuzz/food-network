import { Font } from 'expo';
import React from 'react';
import { Text } from 'react-native';

export default class LogoTitle extends React.Component {
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
      <Text style={{ fontFamily: this.state.fontLoaded ? 'noodle-font' : null, fontSize: 30 }}>
        Noodle
      </Text>
    );
  }
}
