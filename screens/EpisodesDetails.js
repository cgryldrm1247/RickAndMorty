import React, { useEffect, useState } from "react";
import { TouchableOpacity, Button } from "react-native";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from "react-native";

const EpisodeDetails = ({ route, navigation }) => {
  const { episodeId } = route.params;
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [likedCharacters, setLikedCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => response.json())
      .then((data) => {
        setEpisode(data);
        setCharacters(data.characters);
      });
  }, [episodeId]);

  useEffect(() => {
    const fetchCharacterImages = async () => {
      const characterPromises = characters.map((characterUrl) => {
        return fetch(characterUrl).then((response) => response.json());
      });

      const fetchedCharacters = await Promise.all(characterPromises);
      setCharacters(fetchedCharacters);
    };

    if (characters.length > 0) {
      fetchCharacterImages();
    }
  }, [characters]);

  const handleLike = (characterId) => {
    if (likedCharacters.includes(characterId)) {
      // Karakter zaten beğenildiyse, beğeniyi geri al
      setLikedCharacters(likedCharacters.filter((id) => id !== characterId));
    } else {
      if (likedCharacters.length >= 10) {
        alert("Beğeni sayısını aştınız");
      } else {
        setLikedCharacters([...likedCharacters, characterId]);
      }
    }
  };

  const showLikedCharacters = () => {
    const likedCharacterDetails = characters.filter((character) =>
      likedCharacters.includes(character.id)
    );
    navigation.navigate("LikedCharactersScreen", {
      likedCharacters: likedCharacterDetails,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          onPress={showLikedCharacters}
          title="Beğenilen Karakterleri Gör"
        />
        {episode ? (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ marginBottom: 10 }}>Geri Dön</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{episode.name}</Text>
              <Text>Sezon: {episode.season}</Text>
              <Text>Bölüm: {episode.episode}</Text>
              <Text>Tarih: {episode.air_date}</Text>

              <Text>Karakterler:</Text>
              {characters.length > 0 ? (
                characters.map((character) => (
                  <View key={character.id}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CharacterDetails", {
                          characterId: character?.id,
                        })
                      }
                    >
                      <Image
                        source={{ uri: character.image }}
                        style={{ width: 150, height: 100 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLike(character.id)}>
                      <Text
                        style={{
                          marginBottom: 15,
                          fontWeight: likedCharacters.includes(character.id)
                            ? "bold"
                            : "normal",
                        }}
                      >
                        👍 Like
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <ActivityIndicator />
              )}
            </View>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EpisodeDetails;
