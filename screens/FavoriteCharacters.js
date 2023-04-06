import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFavCharacter } from './FavCharacterProvider';

const FavoriteCharacter = ({ character }) => {
  const { favorites, addFavorite, removeFavorite } = useFavCharacter();
  const isFavorited = favorites.some((item) => item.id === character.id);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <View>
      <Text>{character.name}</Text>
      <TouchableOpacity onPress={handleFavoriteToggle}>
        <Text>{isFavorited ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteCharacter;
