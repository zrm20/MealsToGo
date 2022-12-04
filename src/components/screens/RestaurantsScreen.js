import React from "react";
import { TouchableOpacity } from "react-native";

import LoadingSpinner from "../UI/LoadingSpinner";
import Text from "../UI/Text";
import ScreenSafeArea from "../UI/ScreenSafeArea";
import { useRestaurants } from "../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../features/restaurants/RestaurantInfoCard";
import Search from "../features/restaurants/LocationSearch";
import { RestaurantList, LoadingView } from './RestaurantsScreen.styles';


export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading, error } = useRestaurants();

  function renderRestaurantCard({ item: restaurant }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", { id: restaurant.placeId })}>
        <RestaurantInfoCard restaurant={restaurant} />
      </TouchableOpacity>
    );
  };


  return (
    <ScreenSafeArea>
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
    </ScreenSafeArea>
  );
};
