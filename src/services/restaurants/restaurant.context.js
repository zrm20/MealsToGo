import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { restaurantRequest, transformRestaurantResult } from "./restaurant.service";

const RestaurantsContext = createContext();

export function RestaurantsProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurants = useCallback(async (location) => {
    setIsLoading(true);
    setError(null);

    let response;
    try {
      response = await restaurantRequest(location);
    } catch (err) {
      setError(err);
      setIsLoading(false);
      return null;
    };

    const parsedResponse = transformRestaurantResult(response);

    setRestaurants(parsedResponse);
    setIsLoading(false);
  }, [setError, setIsLoading, setRestaurants]);

  useEffect(() => {
    if (location) {
      fetchRestaurants(location);
    }
  }, [fetchRestaurants, location]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, error, isLoading, setLocation }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
};

export function useRestaurants() {
  const restaurantsContext = useContext(RestaurantsContext);

  if (!restaurantsContext) {
    throw new Error('useRestaurants must be used within a RestaurantsProvider');
  };

  return restaurantsContext;
};

export function useRestaurantById(id) {
  const { restaurants } = useContext(RestaurantsContext);

  if (!restaurants) {
    throw new Error('useRestaurants must be used within a RestaurantsProvider');
  };

  const restaurant = restaurants.filter(el => el.placeId === id);

  if (!restaurant || !restaurant.length) {
    return null
  };

  return restaurant[0];
};