import { useEffect, useState } from "react";

import { locationRequest, transformLocationResponse } from "./location.service";
import { useRestaurants } from '../restaurants/restaurant.context';

export default function useLocationSearch(defaultLocation = "37.7749295,-122.4194155") {
  const [searchText, setSearchText] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLocation(defaultLocation);
  }, []);

  const { setLocation } = useRestaurants();

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await locationRequest(searchText);
      const parsedResponse = transformLocationResponse(response);
      setLocation(parsedResponse);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    };
  };

  function handleChange(text) {
    setError(null);
    setSearchText(text)
  };

  return { searchText, handleChange, handleSubmit, isLoading, error }
}