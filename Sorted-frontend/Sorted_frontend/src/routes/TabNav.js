import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Alert} from 'react-native';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyItems from '../screens/MyItems';
import AddItem from '../screens/AddItem';
import * as Icon from 'react-native-feather';
import axios from 'axios';
import {Context} from '../context/GlobalContext';

const Tab = createBottomTabNavigator();

const TabNav = ({navigation}) => {
  const globalContext = useContext(Context);
  const {
    setIsLoggedIn,
    domain,
    userObj,
    setUserObj,
    token,
    setToken,
    items,
    setItems,
    kits,
    setKits,  
  } = globalContext;

  useEffect(() => {
    getItems()
    getKits()
  }, []);

 

  const getItems = async () => {
    console.log('tabnav', token)
    const apiObject = {
      method: 'GET',
      url: `${domain}/items/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    const response = await axios(apiObject);

    setItems(response.data);
  };
  const getKits = async () => {
    const apiObject = {
      method: 'GET',
      url: `${domain}/kits/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    const response = await axios(apiObject);

    setKits(response.data);
  };

  const addItem = async values => {
    const apiObject = {
      method: 'POST',
      url: `${domain}/items/`,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        brand: values.brand,
        model: values.model,
        serial_number: values.serial,
        quantity: values.quantity,
        category: values.category,
      },
    };

    try {
      const response = await axios(apiObject);
      if (response.status === 201) {
        Alert.alert('Success!', 'Your Item Has Been Added'),
          [
            {
              text: 'OK',
            },
          ];
          getItems()
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      alert('An error has occurred');
    }
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
            return <Icon.Grid color={color} size={size} />;
          },
        }}>
        {props => (
          <MyItems
            items={items}
            navigation={props.navigation}
            kits={kits}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Add Item"
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon.PlusCircle color={color} size={size} />;
          },
        }}>
        {props => (
          <AddItem
            // items={items}
            getItems={getItems}
            addItem={addItem}
            // kits={kits}
            // setKits={setKits}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon.Settings color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
