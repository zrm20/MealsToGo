import React from "react";

import LoadingSpinner from "../../../components/LoadingSpinner";
import Text from "../../../components/typography/text.component";
import { useRestaurants } from "../../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Search from "../components/Search";
import { SafeArea, RestaurantList, LoadingView } from './restaurants.styles';

function renderRestaurantCard({ item: restaurant }) {
  return <RestaurantInfoCard restaurant={restaurant} />
};

export default function RestaurantsScreen() {
  const { restaurants, isLoading, error } = useRestaurants();

  return (
    <SafeArea>
      <Search />
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
