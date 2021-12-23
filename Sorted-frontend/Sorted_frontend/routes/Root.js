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
      serial_number: 'KDFJLDSFIOW4384',
      quantity: 1,
      owner: 2,
      category: 'Cameras',
    },
    {
      id: 2,
      brand: 'Canon',
      model: '5D4',
      serial_number: '8474JD8374SDJ',
      quantity: 1,
      owner: 2,
      category: 'Cameras',
    },
    {
      id: 3,
      brand: 'Sony',
      model: 'A7riv',
      serial_number: 'DKDS848H',
      quantity: 2,
      owner: 2,
      category: 'Cameras',
    },
    {
      id: 4,
      brand: 'Sony',
      model: 'A7siii',
      serial_number: 'DSJSDF848JD83',
      quantity: 1,
      owner: 3,
      category: 'Cameras',
    },
    {
      id: 5,
      brand: 'Sony',
      model: '85mm f/1.4',
      serial_number: 'kdkdie93jd',
      quantity: 1,
      owner: 3,
      category: 'Lenses',
    },
    {
      id: 6,
      brand: 'Sony',
      model: '24-70mm f/2.8',
      serial_number: 'dkdhe84',
      quantity: 1,
      owner: 3,
      category: 'Lenses',
    },
    {
      id: 7,
      brand: 'Sigma',
      model: '135mm f/1.8 ART',
      serial_number: 'ie8484jf',
      quantity: 1,
      owner: 3,
      category: 'Lenses',
    },
    {
      id: 8,
      brand: 'Sigma',
      model: '14-24mm f/2.8',
      serial_number: 'fdkdue84',
      quantity: 1,
      owner: 3,
      category: 'Lenses',
    },
    
    {
      id: 10,
      brand: 'Manfrotto',
      model: "lol who cares it's a tripod",
      serial_number: 'dfsoisiew984',
      quantity: 1,
      owner: 3,
      category: 'Support',
    },
    {
      id: 11,
      brand: 'Lowepro',
      model: 'Prorunner 350Aw',
      serial_number: '84jdhjd83',
      quantity: 1,
      owner: 3,
      category: 'Bags & Cases',
    },
    {
      id: 12,
      brand: 'Sennheiser',
      model: 'MKE 600',
      serial_number: 'fdkd8e',
      quantity: 1,
      owner: 3,
      category: 'Sound',
    },
   
    {
      id: 14,
      brand: 'Apple',
      model: 'Macbook Pro',
      serial_number: 'fdkd8d',
      quantity: 1,
      owner: 3,
      category: 'Computers',
    },
    {
      id: 15,
      brand: 'Godox',
      model: 'V1 Flash',
      serial_number: 'djd9d',
      quantity: 1,
      owner: 3,
      category: 'Lighting',
    },
    {
      id: 16,
      brand: 'Rode',
      model: 'Wireless GO',
      serial_number: 'did8d',
      quantity: 1,
      owner: 3,
      category: 'Sound',
    },
    {
      id: 17,
      brand: 'DJI',
      model: 'Mavic 2',
      serial_number: 'did8dj',
      quantity: 1,
      owner: 3,
      category: 'Cameras',
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
          headerShadowVisible: false,
          headerTitle: '',

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
