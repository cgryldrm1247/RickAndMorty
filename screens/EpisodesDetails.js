import React, { useEffect, useState } from "react";
import { TouchableOpacity, Button, StyleSheet, TextInput } from "react-native";
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
  const [searchText, setSearchText] = useState("");

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
      setLikedCharacters(likedCharacters.filter((id) => id !== characterId));
    } else {
      if (likedCharacters.length >= 10) {
        alert(
          "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız"
        );
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

  const filteredCharacters = characters.filter(
    (character) =>
      character.name &&
      character.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Button
          onPress={showLikedCharacters}
          title="Beğenilen Karakterleri Gör"
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          placeholder="Karakter adı ara..."
          placeholderTextColor="#FFFFFF"
        />
        {episode ? (
          <>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {" "}
                Bölüm Adı: {episode.name}
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sezon,Bölüm: {episode.episode}
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Tarih: {episode.air_date}
              </Text>
              <Text style={styles.charactersTitle}>Karakterler:</Text>
              {filteredCharacters.length > 0 ? (
                filteredCharacters.map((character) => (
                  <View style={styles.characterCard} key={character.id}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CharacterDetails", {
                          characterId: character?.id,
                        })
                      }
                    >
                      <Image
                        source={{ uri: character.image }}
                        style={styles.characterImage}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLike(character.id)}>
                      <Text
                        style={[
                          styles.likeText,
                          {
                            fontWeight: likedCharacters.includes(character.id)
                              ? "bold"
                              : "normal",
                          },
                        ]}
                      >
                        👍 Like
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <ActivityIndicator color="#FFFFFF" />
              )}
            </View>
          </>
        ) : (
          <ActivityIndicator color="#FFFFFF" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202329",
  },
  contentContainer: {
    padding: 16,
  },
  charactersTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  characterCard: {
    backgroundColor: "#39434A",
    borderRadius: 5,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
  },
  characterImage: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  likeText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: "#39434A",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#FFFFFF",
    marginBottom: 16,
    width: "100%",
  },
});

export default EpisodeDetails;
