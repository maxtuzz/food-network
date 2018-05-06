import { StackNavigator } from 'react-navigation';
import ProfileScreen from './components/screens/ProfileScreen';
import HomeScreen from './components/screens/HomeScreen';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});
