import React, {useState, useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemDetail from '../screens/ItemDetail';
import {Context} from '../context/GlobalContext';
import Login from '../screens/Login';
import Cameras from '../components/Cameras'
import Lenses from '../components/Lenses';
import Sound from '../components/Sound';
import Storage from '../components/Storage';
import VideoKits from '../components/VideoKits';
import PhotoKits from '../components/PhotoKits';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();

function StackNav() {
  const globalContext = useContext(Context);
  const {isLoggedIn, setIsLoggedIn, domain, userObj, setUserObj, setToken} =
    globalContext;

  return (
    <Stack.Navigator initialRouteName="Login">
      {!isLoggedIn || !userObj ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: 'Sorted',
          }}
        />
      ) : 
        <>
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
          <Stack.Screen name="Cameras" component={Cameras} />
          <Stack.Screen name="Lenses" component={Lenses} />
          <Stack.Screen name="Sound" component={Sound} />
          <Stack.Screen name="Storage" component={Storage} />
          <Stack.Screen name="Photo Kits" component={PhotoKits} />
          <Stack.Screen name="Video Kits" component={VideoKits} />
        </>
      }
    </Stack.Navigator>
  );
}

export default StackNav;
