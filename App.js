import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation/Navigation';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </Provider>
);

export default App;