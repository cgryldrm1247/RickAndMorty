import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EpisodesList from './EpisodesList';
import CharacterDetails from './CharacterDetails';
import FavoriteCharacters from './FavoriteCharacters';

const Stack = createStackNavigator
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EpisodesList">
        <Stack.Screen name="EpisodesList" component={EpisodesList} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="FavoriteCharacters" component={FavoriteCharacters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;