import React, {useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Context, Provider} from './src/context/GlobalContext';
import StackNav from './src/routes/StackNav';
import TabNav from './src/routes/TabNav';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App() {


  return (
    <Provider>
      <NavigationContainer theme={Theme}>
        <StackNav/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
