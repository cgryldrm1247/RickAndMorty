export const addFavorite = (character) => ({
    type: 'ADD_FAVORITE',
    payload: character,
  });
  
  export const removeFavorite = (characterId) => ({
    type: 'REMOVE_FAVORITE',
    payload: characterId,
  });