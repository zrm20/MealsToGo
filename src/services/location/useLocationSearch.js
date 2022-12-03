import { useState } from "react";

import { locationRequest, transformLocationResponse } from "./location.service";

export default function useLocationSearch() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await locationRequest(searchText);
      const parsedResponse = transformLocationResponse(response);
      setIsLoading(false);
      console.log('Location found: ' + parsedResponse);
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