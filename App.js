
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from './redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import store from './redux/store';
import Pagination from './components/Pagination';

const MainApp = () => {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEpisodes();
  }, [currentPage]);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
      const data = await response.json();
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const onSearch = () => {
    const filtered = episodes.filter(episode =>
      episode.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEpisodes(filtered);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        // Bölüm detaylarına yönlendirin
      }}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Karakter ara..."
      />
      <Button title="Arama" onPress={onSearch} />
      <FlatList
        data={filteredEpisodes.length > 0 ? filteredEpisodes : episodes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;