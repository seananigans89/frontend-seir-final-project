import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './components/TabBar';


const seedData = [
  {
      "id": 1,
      "brand": "Sony",
      "model": "A7iii",
      "serial_number": "jkdsfdsl98",
      "quantity": 1,
      "owner": 2
  },
  {
      "id": 2,
      "brand": "Canon",
      "model": "5D4",
      "serial_number": "sdfds",
      "quantity": 1,
      "owner": 2
  },
  {
      "id": 3,
      "brand": "Sony",
      "model": "A7riv",
      "serial_number": "fewrfew",
      "quantity": 2,
      "owner": 2
  },
  {
      "id": 4,
      "brand": "Sony",
      "model": "A7siii",
      "serial_number": "kuyuyk",
      "quantity": 1,
      "owner": 3
  }
]






function App() {
  return (
    <NavigationContainer>

        <TabBar/>

    </NavigationContainer>
  );
}

export default App; 