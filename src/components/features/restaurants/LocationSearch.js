import React from "react";
import { Searchbar } from "react-native-paper";

import { SearchContainer, FetchingSpinner, ErrorMessage } from './LocationSearch.styles';
import useLocationSearch from "../../../services/location/useLocationSearch";

export default function Search(props) {
  const { searchText, handleChange, handleSubmit, isLoading, error } = useLocationSearch();

  return (
    <SearchContainer >
      <Searchbar
        placeholder="Search for a location"
        value={searchText}
        onChangeText={handleChange}
        onEndEditing={handleSubmit}
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
