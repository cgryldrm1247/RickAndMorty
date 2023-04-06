import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EpisodesList from '../screens/EpisodesList';
import CharacterDetails from '../screens/CharacterDetails';
import FavoriteCharacters from '../screens/FavoriteCharacters';
import FavoriteCharacter from '../screens/FavoriteCharacters';
import EpisodeDetails from '../screens/EpisodesDetails';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EpisodesList">
        <Stack.Screen name="EpisodesList" component={EpisodesList} />
        <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="FavoriteCharacters" component={FavoriteCharacter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;