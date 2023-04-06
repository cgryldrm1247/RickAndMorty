import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from "../MainApp";
import EpisodeDetails from '../screens/EpisodesDetails';
import CharacterDetails from '../screens/CharacterDetails';
import LikedCharactersScreen from '../screens/LikedCharactersScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ title: 'Ana Sayfa' }}
      />
      <Stack.Screen
        name="EpisodeDetails"
        component={EpisodeDetails}
        options={{ title: 'Bölüm Detayları' }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={{ title: 'Karakter Detayları' }}
      />
      <Stack.Screen
        name="LikedCharactersScreen"
        component={LikedCharactersScreen}
        options={{ title: 'Beğendiğin karakterler' }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;