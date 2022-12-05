import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => console.log('Favorites: ', favorites), [favorites]); // TODO Delete this

  function toggleFavorite(restaurant) {
    if (!restaurant) {
      throw new Error('No restaurant recieved');
    };

    const { placeId } = restaurant;

    if (!placeId) {
      throw new Error('No placeId found on restaurant');
    };

    if (favorites.includes(placeId)) {
      // already favorited, so remove from favorite
      const filteredFavorites = favorites.filter(id => id !== placeId);
      setFavorites(filteredFavorites);
    } else {
      // not yet favorited, so add to favorites
      setFavorites([...favorites, placeId]);
    };
  };

  function clearFavorites() {
    setFavorites([]);
  };

  function isFavorite(restaurant) {
    return favorites.includes(restaurant.placeId);
  };

  return (
    <FavoritesContext.Provider
      value={
        {
          favorites,
          isFavorite,
          toggleFavorite,
          clearFavorites
        }
      }
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  };

  return favoritesContext;
};