import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Settings from '../components/Settings';
import Home from '../components/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyItems from '../components/MyItems';
import AddItem from '../components/AddItem';
import * as Icon from 'react-native-feather';

const Tab = createBottomTabNavigator();
const Root = ({navigation}) => {
  const [items, setItems] = useState([
    {
      id: 1,
      brand: 'Sony',
      model: 'A7iii',
      serial_number: 'jkdsfdsl98',
      quantity: 1,
      owner: 2,
    },
    {
      id: 2,
      brand: 'Canon',
      model: '5D4',
      serial_number: 'sdfds',
      quantity: 1,
      owner: 2,
    },
    {
      id: 3,
      brand: 'Sony',
      model: 'A7riv',
      serial_number: 'fewrfew',
      quantity: 2,
      owner: 2,
    },
    {
      id: 4,
      brand: 'Sony',
      model: 'A7siii',
      serial_number: 'kuyuyk',
      quantity: 1,
      owner: 3,
    },
  ]);

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
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'darkgrey',
        
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon.Home color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="My Items"
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon.Grid  color={color} size={size} />;
          },
        }}>
        {props => <MyItems items={items} navigation={props.navigation} />}
      </Tab.Screen>

      <Tab.Screen
        name="Add Item"
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon.PlusCircle  color={color} size={size} />;
          },
        }}>
        {props => (
          <AddItem items={items} setItems={setItems} addItem={addItem} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon.Settings  color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({
 
});
