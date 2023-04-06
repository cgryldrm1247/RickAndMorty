import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from "react-native";


const EpisodeDetails = ({ episodeId, navigation }) => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [characterImages, setCharacterImages] = useState([]);

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

  return (
    <SafeAreaView>
      <ScrollView>
        {episode ? (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ marginBottom: 10 }}>Geri Dön</Text>
            </TouchableOpacity>
            <View
              stlye={{
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
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CharacterDetails", {
                        characterId: character.id,
                      })
                    }
                  >
                    <View key={character.id}>
                      <Image
                        source={{ uri: character.image }}
                        style={{ width: 150, height: 100 }}
                      />
                    </View>
                  </TouchableOpacity>
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
