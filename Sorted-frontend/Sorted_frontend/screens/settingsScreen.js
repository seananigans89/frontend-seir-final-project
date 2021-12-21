import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import HeaderScreen from '../components/Header';
import Settings from '../components/Settings';

const screens = {
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen title='Settings' navigation={navigation} />
      }
    },
  },
}

const SettingsStack = createStackNavigator(screens)

export default SettingsStack;