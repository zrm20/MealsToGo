import React from "react";
import { Searchbar } from "react-native-paper";

import { SearchContainer, FetchingSpinner, ErrorMessage } from '../restaurants/LocationSearch.styles';
import useLocationSearch from "../../../services/location/useLocationSearch";

export default function LocationSearch({ containerProps = {}, ...props }) {
  const { searchText, handleChange, handleSubmit, isLoading, error } = useLocationSearch();

  return (
    <SearchContainer {...containerProps}>
      <Searchbar
        placeholder="Search for a location"
        value={searchText}
        onChangeText={handleChange}
        onEndEditing={handleSubmit}
        {...props}
      />
      {
        isLoading &&
        <FetchingSpinner size={20} />
      }
      {
        error &&
        <ErrorMessage variant="error">{error || "Something went wrong"}</ErrorMessage>
      }
    </SearchContainer>
  );
};
