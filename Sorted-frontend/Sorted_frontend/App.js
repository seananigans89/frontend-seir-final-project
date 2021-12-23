import React from 'react';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './routes/Root';
import ItemDetail from './components/ItemDetail';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import { Navigation } from 'react-native-feather';

const Theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'white'
  }
}


const Stack = createNativeStackNavigator()

function App() {

  return (


 
    <SafeAreaProvider>
      <NavigationContainer theme={Theme}>

        <Stack.Navigator 
        initialRouteName="Root"
        
        >
          <Stack.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
              
            }}
          />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>


  );
}

export default App; 