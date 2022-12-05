import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import LoadingSpinner from "../UI/LoadingSpinner";
import Text from "../UI/Text";
import ScreenSafeArea from "../UI/ScreenSafeArea";
import { useRestaurants } from "../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../features/restaurants/RestaurantInfoCard";
import LocationSearch from "../features/LocationSearch/LocationSearch";
import { RestaurantList, LoadingView } from './RestaurantsScreen.styles';
import FavoritesScroller from "../features/favorites/FavoritesScroller";


export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading, error } = useRestaurants();
  const [showFavorites, setShowFavorites] = useState(false);

  function renderRestaurantCard({ item: restaurant }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", { id: restaurant.placeId })}>
        <RestaurantInfoCard restaurant={restaurant} />
      </TouchableOpacity>
    );
  };

  function toggleShowFavorites() {
    setShowFavorites(!showFavorites);
  }


  return (
    <ScreenSafeArea>
      <LocationSearch icon="heart" onIconPress={toggleShowFavorites} />
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
        showFavorites &&
        <FavoritesScroller />
      }
      {
        !isLoading && !error &&
        <RestaurantList
          data={restaurants}
          renderItem={renderRestaurantCard}
          keyExtractor={restaurant => restaurant.placeId}
        />
      }
    </ScreenSafeArea>
  );
};
