import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import FavoriteCharacter from './FavoriteCharacter';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({ item }) => <FavoriteCharacter character={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Characters;
