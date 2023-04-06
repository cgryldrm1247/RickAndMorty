import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const EpisodesList = ({navigation}) => {
  // ... useState, useEffect ve diğer fonksiyonlar

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('EpisodeDetails', {episodeId: item.id})}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>Episode: {item.episode}</Text>
      <Text style={styles.itemText}>Air Date: {item.air_date}</Text>
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