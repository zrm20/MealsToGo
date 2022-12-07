import React from "react";
import { TouchableOpacity, View } from "react-native";

import { useFavorites } from "../../../services/favorites/favorites.context";
import { Text } from "../../UI";
import useStyles from "./FavoritesScreen.styles";
import { RestaurantList } from "../RestaurantsScreen/RestaurantsScreen.styles";
import RestaurantInfoCard from "../../features/restaurants/RestaurantInfoCard";
import { FAB } from "react-native-paper";

export default function FavoritesScreen({ navigation }) {
  const styles = useStyles();
  const { favorites } = useFavorites();

  function renderRestaurantCard({ item: restaurant }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("FavoriteDetails", { restaurant })}>
        <RestaurantInfoCard restaurant={restaurant} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container} >
      <FAB
        icon="close"
        style={styles.closeButton}
        small
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Favorites</Text>
      {
        favorites.length === 0 ?
          <Text>No favorites yet</Text> :
          <RestaurantList
            data={favorites}
            renderItem={renderRestaurantCard}
            keyExtractor={restaurant => restaurant.placeId}
          />
      }
    </View>
  );
};
