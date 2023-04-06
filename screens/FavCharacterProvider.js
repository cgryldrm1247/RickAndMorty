import React, { createContext, useContext, useState } from 'react';

const FavCharacterContext = createContext();

export const useFavCharacter = () => useContext(FavCharacterContext);

export const FavCharacterProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    if (favorites.length < 10) {
      setFavorites([...favorites, character]);
    } else {
      alert('Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.');
    }
  };

  const removeFavorite = (characterId) => {
    setFavorites(favorites.filter((item) => item.id !== characterId));
  };

  return (
    <FavCharacterContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavCharacterContext.Provider>
  );
};

export default FavCharacterProvider;
