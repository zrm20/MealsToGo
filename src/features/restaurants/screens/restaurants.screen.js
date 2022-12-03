import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useRestaurants } from "../../../services/restaurants/restaurant.context";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea, SearchContainer, RestaurantList } from './restaurants.styles';

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
      <RestaurantList
        data={restaurants}
        renderItem={renderRestaurantCard}
        keyExtractor={restaurant => restaurant.placeId}
      />
    </SafeArea>
  );
};
