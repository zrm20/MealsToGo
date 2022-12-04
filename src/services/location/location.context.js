import { createContext, useContext, useState } from "react";
import { locationRequest, transformLocationResponse } from "./location.service";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [searchBarValue, setSearchBarValue] = useState("Chicago");
  const [searchTerm, setSearchTerm] = useState("Chicago");
  const [location, setLocation] = useState("41.878113,-87.629799");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    setSearchTerm(searchBarValue);
    setIsLoading(true);
    try {
      const response = await locationRequest(searchBarValue);
      const parsedResponse = transformLocationResponse(response);
      setLocation(parsedResponse);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    };
  };

  function handleTextChange(text) {
    setError(null);
    setSearchBarValue(text)
  };

  const contextValue = {
    searchBarValue,
    searchTerm,
    location,
    isLoading,
    error,
    handleTextChange,
    handleSubmit
  };

  return (
    <LocationContext.Provider value={contextValue} >
      {children}
    </LocationContext.Provider>
  );
};

export function useLocation() {
  const locationContext = useContext(LocationContext);

  if (!locationContext) {
    throw new Error('useLocation must be used inside a LocationProvider');
  };

  return locationContext;
};