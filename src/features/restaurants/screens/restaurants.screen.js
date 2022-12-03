import React, { useState } from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Text from "../../../components/typography/text.component";
import { useRestaurants } from "../../../services/restaurants/restaurant.context";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea, SearchContainer, RestaurantList, LoadingView } from './restaurants.styles';

function renderRestaurantCard(restaurant) {
  return <RestaurantInfoCard restaurant={restaurant.item} />
};

export default function RestaurantsScreen() {
  const [searchText, setSerachText] = useState("");
  const { restaurants, isLoading, error } = useRestaurants();

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchText}
          onChange={setSerachText}
        />
      </SearchContainer>
      {
        isLoading &&
        <LoadingView>
          <LoadingSpinner />
        </LoadingView>
      }
      {
        error &&
        <LoadingView>
          <Text variant="error">Error!</Text>
          <Text variant="caption">Please try again</Text>
        </LoadingView>
      }
      {
        !isLoading && !error &&
        <RestaurantList
          data={restaurants}
          renderItem={renderRestaurantCard}
          keyExtractor={restaurant => restaurant.placeId}
        />
      }
    </SafeArea>
  );
};
