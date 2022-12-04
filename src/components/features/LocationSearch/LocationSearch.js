import React from "react";
import { Searchbar } from "react-native-paper";

import { SearchContainer, FetchingSpinner, ErrorMessage } from './LocationSearch.styles';
import { useLocation } from "../../../services/location/location.context";

export default function LocationSearch({ containerProps = {}, ...props }) {
  const { searchBarValue, handleTextChange, handleSubmit, error, isLoading } = useLocation();

  return (
    <SearchContainer {...containerProps}>
      <Searchbar
        placeholder="Search for a location"
        value={searchBarValue}
        onChangeText={handleTextChange}
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
