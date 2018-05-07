import React from 'react';
import { FlatList} from 'react-native';
import FoodCard from '../presentation/FoodCard';

const data = [{
  name: 'Max Tuzzolino',
  foodUrl: 'https://lh3.googleusercontent.com/Alsn7kJfyJyv_bOP6OXyX27-fY9LiMEW1UCrNTusiPHEthb_0IjKYkmNGg3zs1iuZASMDnWhASE5lMI61JnTfR_i',
  profilePic: 'https://lh3.googleusercontent.com/zBRY0VXcriPhGC1CqIAv5U1mye4FDURsN-7RGNQ6jJ3R2AB-XN5xptvHH9gCYoDYF9SLgz24tZpkMYu963t_W1ErcA',
}, {
  name: 'Giles Turner',
  foodUrl: 'https://lh3.googleusercontent.com/4TagiAkGu6iVVUednzbB3BaJWlDV5DfmU7acVVdlPvoDkdbbBo-ymY9l2oSEkRaxWi3JAVwtHUxTL2LQeu3i3d0_MA',
  profilePic: 'https://lh3.googleusercontent.com/zBRY0VXcriPhGC1CqIAv5U1mye4FDURsN-7RGNQ6jJ3R2AB-XN5xptvHH9gCYoDYF9SLgz24tZpkMYu963t_W1ErcA',
}];

export default class PostFeed extends React.Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <FoodCard
      post={item}
      navigation={this.props.navigation}
    />
  );

  render() {
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => this.keyExtractor(item, index)}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

