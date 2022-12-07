import React from "react";
import { LoginScreen } from "../components/screens";
import TabNavigator from "./TabNavigator";
import { useAuth } from "../services/auth/auth.context";
import { LocationProvider } from "../services/location/location.context";
import { FavoritesProvider } from "../services/favorites/favorites.context";
import { RestaurantsProvider } from "../services/restaurants/restaurant.context";

export default function AppRoot() {
  const { user } = useAuth();

  if (!user) {
    return <LoginScreen />
  };

  return (
    <LocationProvider>
      <FavoritesProvider>
        <RestaurantsProvider>
          <TabNavigator />
        </RestaurantsProvider>
      </FavoritesProvider>
    </LocationProvider>
  )
};