import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import config from './config';

const styles = StyleSheet.create({
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

  userBar: {
    width: `${100}%`,
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  toolBar: {
    height: config.styleConstants.rowHeight,
    width: `${100}%`,
    borderBottomColor: 'rgb(233, 233, 233)',
    // borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },

  icon: {
    paddingHorizontal: 5,
    paddingVertical: 11,
  },
});

export default class SocialFood extends Component {
  constructor() {
    super();

    this.state = {
      liked: false,
      screenWidth: Dimensions.get('window').width,
    };
  }

  /**
   * Toggle liked image
   */
  toggleLiked() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);

    const uri = `${'https://lh3.googleusercontent.com/4TagiAkGu6iVVUednzbB3BaJWlDV5DfmU7acVVdlPvoDkdbbBo-ymY9l2oSEkRaxWi3JAVwtHUxTL2LQeu3i3d0_MA' +
    '=s'}${imageHeight}`;


    return (
      <View style={{ flex: 1, width: `${100}%`, height: `${100}%` }}>
        <View style={styles.navigationBar}>
          <Text>Noodle</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{
                uri: 'https://lh3.googleusercontent.com/zBRY0VXcriPhGC1CqIAv5U1mye4FDURsN-7RGNQ6jJ3R2AB-XN5xptvHH9gCYoDYF9SLgz24tZpkMYu963t_W1ErcA',
              }}
            />
            <Text style={{ marginLeft: 10 }}>Max Tuzzolino</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.toggleLiked()}
          underlayColor="white"
        >
          <Image
            style={{ width: this.state.screenWidth, height: 450 }}
            source={{ uri }}
          />
        </TouchableOpacity>

        <View style={styles.toolBar}>
          <TouchableOpacity onPress={() => this.toggleLiked()} underlayColor="white">
            <Icon
              iconStyle={styles.icon}
              name={(this.state.liked) ? 'heart' : 'heart-o'}
              type="font-awesome"
              color={(this.state.liked) ? 'rgb(255, 61, 57)' : 'rgb(0, 0, 0)'}
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity underlayColor="white">
            <Icon
              iconStyle={styles.icon}
              name="bubble"
              type="simple-line-icon"
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity underlayColor="white">
            <Icon
              iconStyle={styles.icon}
              name="sc-telegram"
              type="evilicon"
              size={30}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toolBar}>
          <Text style={styles.icon}>{Math.round(this.state.screenWidth)} likes</Text>
        </View>
      </View>
    );
  }
}
