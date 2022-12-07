import { createContext, useContext, useEffect, useState } from "react";
import { getData, storeData } from "../../utils/asyncStorage";
import { useAuth } from "../auth/auth.context";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    async function loadInitialFavorites(uid) {
      const initalFavorites = await getData(`@favorites-${uid}`);
      if (initalFavorites) {
        setFavorites(initalFavorites);
      }
    };

    if (user) {
      loadInitialFavorites(user.uid);
    };
  }, []);

  useEffect(() => {
    async function saveFavorites(uid) {
      if (!uid) {
        throw new Error('No user id provided');
      }
      await storeData(`@favorites-${uid}`, favorites)
    };

    if (updates > 0) {
      saveFavorites(user.uid);
    };

  }, [updates]);


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
      // increment updates to trigger save to local
      setUpdates(updates + 1);
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
