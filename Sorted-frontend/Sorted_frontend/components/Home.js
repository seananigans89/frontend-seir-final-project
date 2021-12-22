import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Icon from 'react-native-feather';
import Card from './Card';

const Home = (props) => {

console.log(props)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Card/>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
