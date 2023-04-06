import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const LikedCharactersScreen = ({ route }) => {
  const { likedCharacters } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {likedCharacters.length > 0 ? (
        likedCharacters.map((character) => (
          <View style={styles.characterContainer} key={character.id}>
            <Image
              source={{ uri: character.image }}
              style={styles.image}
            />
            <Text style={styles.name}>{character.name}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noCharactersText}>Henüz beğenilen bir karakter yok</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#202329',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
    },
    characterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#39434A',
      borderRadius: 5,
      padding: 8,
      marginVertical: 8,
      backgroundColor: '#39434A',
      width: '90%',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    noCharactersText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#FFFFFF',
    },
  });

export default LikedCharactersScreen;
