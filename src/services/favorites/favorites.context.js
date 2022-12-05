import { createContext, useContext, useEffect, useState } from "react";
import { getData, storeData } from "../../utils/asyncStorage";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadInitialFavorites() {
      const initalFavorites = await getData('@favorites');
      if (initalFavorites) {
        setFavorites(initalFavorites);
      }
    };

    loadInitialFavorites();
  }, [])

  useEffect(() => {
    async function saveFavorites() {
      await storeData('@favorites', favorites)
    };

    saveFavorites();
  }, [favorites]);

  function isFavorite(restaurant) {
    const favoritesIndex = favorites.findIndex(el => el.placeId === restaurant.placeId);
    return favoritesIndex !== -1;
  };

  function toggleFavorite(restaurant) {
    if (!restaurant) {
      throw new Error('No restaurant recieved');
    };

    if (isFavorite(restaurant)) {
      // already favorited, so remove from favorite
      const filteredFavorites = favorites.filter(favorite => favorite.placeId !== restaurant.placeId);
      setFavorites(filteredFavorites);
    } else {
      // not yet favorited, so add to favorites
      setFavorites([...favorites, restaurant]);
    };
  };

  function clearFavorites() {
    setFavorites([]);
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
