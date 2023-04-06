import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const CharacterDetails = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [characterId]);

  return (
    <View style={styles.container}>
      {character ? (
        <View style={styles.characterContainer}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.detail}>Cinsiyet: {character.gender}</Text>
            <Text style={styles.detail}>Tür: {character.species}</Text>
            <Text style={styles.detail}>Durum: {character.status}</Text>
            {character.type ? <Text style={styles.detail}>Tip: {character.type}</Text> : null}
          </View>
        </View>
      ) : (
        <ActivityIndicator color="#FFFFFF" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202329',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flexDirection: 'column',
  },
  characterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#39434A',
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#39434A',
    width: '90%',
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 50,
    marginRight: 16,
  },
  textContainer: {
    alignItems: 'center',

  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
    color: '#FFFFFF',
  },
});

export default CharacterDetails;
