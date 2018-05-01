import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Font } from 'expo';
import FoodCard from './components/presentation/FoodCard';

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },

  navigationBar: {
    width: `${100}%`,
    height: 30,
    marginTop: 0,
    borderBottomColor: 'rgb(233, 233, 233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default class SocialFood extends Component {
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
      'noodle-font': require('../assets/fonts/noodle.ttf'),
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

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <FoodCard
            name="Max Tuzzolino"
            foodUrl="https://lh3.googleusercontent.com/Alsn7kJfyJyv_bOP6OXyX27-fY9LiMEW1UCrNTusiPHEthb_0IjKYkmNGg3zs1iuZASMDnWhASE5lMI61JnTfR_i"
            profilePic="https://lh3.googleusercontent.com/zBRY0VXcriPhGC1CqIAv5U1mye4FDURsN-7RGNQ6jJ3R2AB-XN5xptvHH9gCYoDYF9SLgz24tZpkMYu963t_W1ErcA"
          />
          <FoodCard
            name="Giles Turner"
            foodUrl="https://lh3.googleusercontent.com/4TagiAkGu6iVVUednzbB3BaJWlDV5DfmU7acVVdlPvoDkdbbBo-ymY9l2oSEkRaxWi3JAVwtHUxTL2LQeu3i3d0_MA"
            profilePic="https://media.licdn.com/dms/image/C5603AQFAZf0OBkrWtg/profile-displayphoto-shrink_800_800/0?e=1530356400&v=beta&t=a-0J3rgwmygKa42OPOX-v0VzJXTwzNGGDrzIZs3mwfQ"
          />
        </ScrollView>
      </View>
    );
  }
}
