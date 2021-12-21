import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Settings from './Settings';
import Home from './Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Categories from './Categories';
import AddItem from './AddItem';
import * as Icon from 'react-native-feather';
import HeaderScreen from './Header';

const Tabs = createMaterialBottomTabNavigator();

const TabBar = () => {
  return (
    <Tabs.Navigator
        initialRouteName= "Home"
        shifting= {true} 
        labeled={false}
        screenOptions={({route}) => ({
        })}
      >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          route: () => ({title: route.params.name}),
          tabBarColor: 'lightgreen',
          tabBarIcon: () => <Icon.Home color="black" />,
        }}
      />
      <Tabs.Screen
        name="Add Item"
        component={AddItem}
        options={{
          tabBarColor: 'lightblue',
          tabBarIcon: () => <Icon.PlusCircle color="black" />,
        }}
      />
      <Tabs.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarColor: 'lemonchiffon',
          tabBarIcon: () => <Icon.Grid color="black" />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarColor: 'lightpink',
          tabBarIcon: () => <Icon.Settings color="black" />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
