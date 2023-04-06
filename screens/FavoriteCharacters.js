import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFavorite} from './redux/actions';

const FavoriteCharacters = ({navigation}) => {
  const favorites = useSelector((state) => state.favorites.characters);
  const dispatch = useDispatch();

  const removeFromFavorites = (characterId) => {
    dispatch(removeFavorite(characterId));
  };

  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('CharacterDetails', {characterId: item.id})}>
        <Text>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text>Favorite Characters</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavoriteCharacters;