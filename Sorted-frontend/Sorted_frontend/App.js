import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from './routes/Root';
import ItemDetail from './components/ItemDetail';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './components/Login';


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
          <Stack.Screen name="Login" component={Login} options={{
            headerTitle: 'Sorted'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
