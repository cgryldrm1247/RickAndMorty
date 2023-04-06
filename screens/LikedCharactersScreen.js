import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const LikedCharactersScreen = ({ route }) => {
  const { likedCharacters } = route.params;

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {likedCharacters.length > 0 ? (
          likedCharacters.map((character) => (
            <View key={character.id}>
              <Image
                source={{ uri: character.image }}
                style={{ width: 150, height: 100 }}
              />
              <Text>{character.name}</Text>
            </View>
          ))
        ) : (
          <Text>Henüz beğenilen bir karakter yok</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default LikedCharactersScreen;
