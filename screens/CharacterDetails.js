import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

const CharacterDetails = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [characterId]);

  return (
    <View>
      {character ? (
        <>
          <Text>{character.name}</Text>
          <Text>Cinsiyet: {character.gender}</Text>
          <Text>Tür: {character.species}</Text>
          <Text>Durum: {character.status}</Text>
          <Image source={{ uri: character.image }} style={{ width: 100, height: 100 }} />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default CharacterDetails;
