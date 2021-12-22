import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Settings from './Settings';
import Home from './Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Items from './Items';
import AddItem from './AddItem';
import * as Icon from 'react-native-feather';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    console.log(items);
    item.key = item.id;
    setItems(currentItems => {
      return [item, ...currentItems];
    });
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      labeled={false}
      activeColor="black"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          route: () => ({title: route.params.name}),
          //   tabBarIconStyle: color='blue',
          tabBarIcon: ({focused, color, size}) => {
            const icon = focused ? 'bell' : 'home';
            return <Icon.Home name={icon} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="My Items"
        component={Items}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            const icon = focused ? 'bell' : 'home';
            return <Icon.Grid name={icon} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Add Item"
        options={{
          tabBarIcon: ({focused, color, size}) => {
            const icon = focused ? 'bell' : 'home';
            return <Icon.PlusCircle name={icon} color={color} size={size} />;
          },
        }}>
      
        {props => <AddItem items={items} setItems={setItems} addItem={addItem}/>}
      </Tab.Screen>  

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            const icon = focused ? 'bell' : 'home';
            return <Icon.Settings name={icon} color={color} size={size} />;
          },
        }}
      />

    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
