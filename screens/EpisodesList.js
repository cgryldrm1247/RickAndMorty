import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const EpisodesList = ({navigation}) => {
  // ... useState, useEffect ve diğer fonksiyonlar

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('EpisodeDetails', { episodeId: item.id })}
    >
      <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Episodes List</Text>
      <FlatList
        data={episodes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
},
});

export default EpisodesList;