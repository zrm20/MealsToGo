import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { restaurantRequest, transformRestaurantResult } from "./restaurant.service";

const RestaurantsContext = createContext();

export function RestaurantsProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurant = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    let response;
    try {
      response = await restaurantRequest();
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
    fetchRestaurant();
  }, [fetchRestaurant]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, error, isLoading }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
};

export function useRestaurants() {
  const restaurants = useContext(RestaurantsContext);

  if (!restaurants) {
    throw new Error('useRestaurants must be used within a RestaurantsProvider');
  };

  return restaurants;
};