import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './components/TabBar';
import HeaderScreen from './components/Header'







function App() {
  return (
    <NavigationContainer>

        <HeaderScreen/>
        <TabBar/>

    </NavigationContainer>
  );
}

export default App;