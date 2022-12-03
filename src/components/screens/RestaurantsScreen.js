import React from "react";
import { Button } from "react-native-paper";

import LoadingSpinner from "../UI/LoadingSpinner";
import Text from "../UI/Text";
import { useRestaurants } from "../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../features/restaurants/RestaurantInfoCard";
import Search from "../features/restaurants/LocationSearch";
import { SafeArea, RestaurantList, LoadingView } from './RestaurantsScreen.styles';

function renderRestaurantCard({ item: restaurant }) {
  return <RestaurantInfoCard restaurant={restaurant} />
};

export default function RestaurantsScreen({ navigation }) {
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
          <Text variant="caption">{error}</Text>
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
      <Button onPress={() => navigation.navigate('RestaurantDetails')}>Go</Button>
    </SafeArea>
  );
};
