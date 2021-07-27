import React from 'react';
import { View  , Text } from 'react-native';
import AppHeader from './AppHeader';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View> 
        <AppHeader />
<HomeScreen />
      </View>
    );
  }
}

