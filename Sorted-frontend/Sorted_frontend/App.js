import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from './routes/Root';
import ItemDetail from './components/ItemDetail';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './components/Login';
import Cameras from './components/Cameras';
import Lenses from './components/Lenses';
import Sound from './components/Sound';
import Storage from './components/Storage';
import VideoKits from './components/VideoKits';
import PhotoKits from './components/PhotoKits';


const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Root"
            component={Root}
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
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: 'Sorted',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
