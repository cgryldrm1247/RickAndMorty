// import React, {useState, useEffect} from 'react';
// import {View, Text, Image, TouchableOpacity} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {addFavorite, removeFavorite} from './redux/actions';

// const CharacterDetails = ({route}) => {
//   const {characterId} = route.params;
//   const [character, setCharacter] = useState(null);
//   const favorites = useSelector((state) => state.favorites.characters);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchCharacterDetails();
//   }, []);

//   const fetchCharacterDetails = async () => {
//     // API isteği yaparak karakter detaylarını alın ve character state'ine atayın.
//   };

//   const toggleFavorite = () => {
//     if (isFavorite()) {
//       dispatch(removeFavorite(character.id));
//     } else {
//       dispatch(addFavorite(character));
//     }
//   };

//   const isFavorite = () => {
//     return favorites.some((fav) => fav.id === character.id);
//   };

//   if (!character) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View>
//       <Image source={{uri: character.image}} />
//       <Text>{character.name}</Text>
//       <Text>{character.status}</Text>
//       <Text>{character.species}</Text>
//       <Text>{character.type}</Text>
//       <Text>{character.gender}</Text>
//       <Text>{character.origin.name}</Text>
//       <Text>{character.location.name}</Text>
//       <TouchableOpacity onPress={toggleFavorite}>
//         <Text>{isFavorite() ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CharacterDetails;


import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

const CharacterDetails = ({ route }) => {
  const characterId = route.params.characterId;
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
