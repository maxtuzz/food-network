import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import config from '../../config';
import ProfileScreen from '../screens/ProfileScreen';

/**
 * Food card view
 *
 * @author Max
 */

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },

  icon: {
    paddingHorizontal: 5,
    paddingVertical: 11,
  },
});

interface FoodProperties {
  post : {
    name: string,
    foodUrl: string,
    profilePic: string
  }
}

export default class FoodCard extends Component<FoodProperties> {
  constructor(props) {
    super(props);

    alert(props);

    this.state = {
      liked: false,
      screenWidth: Dimensions.get('window').width,
    };
  }

  viewProfile() {
    this.props.navigation.navigate('myStack');
  }

  /**
   * Toggle liked image
   */
  toggleLiked() {
    alert('Long press');
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);

    const uri = `${this.props.post.foodUrl}=s${imageHeight}`;

    return (
      <View>
        <View style={styles.userBar}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.viewProfile()}
            underlayColor="white"
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.userPic}
                source={{
                uri: this.props.post.profilePic,
              }}
              />
              <Text style={{ marginLeft: 10 }}>{this.props.post.name}</Text>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onLongPress={() => this.toggleLiked()}
          underlayColor="white"
        >
          <Image
            style={{ width: this.state.screenWidth, height: 450 }}
            source={{ uri }}
          />
        </TouchableOpacity>

        <View style={styles.toolBar}>
          <TouchableOpacity onPress={e => this.toggleLiked(e)} underlayColor="white">
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
