import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './routes/Root';
import ItemDetail from './components/ItemDetail';






const Stack = createNativeStackNavigator()

function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName='Root'>
        <Stack.Screen name="Root" component={Root} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App; 