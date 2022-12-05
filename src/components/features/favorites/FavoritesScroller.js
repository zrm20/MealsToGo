import React from "react";
import { View, FlatList, Text } from "react-native";
import MapCallout from "../map/MapCallout";
import { useFavorites } from "../../../services/favorites/favorites.context";
import { useRestaurantById } from "../../../services/restaurants/restaurant.context";
import useStyles from "./FavoritesScroller.styles";
import FavoritesAvatar from "./FavoritesAvatar";


export default function FavoritesScroller({ navigate }) {
  const { favorites } = useFavorites()
  const styles = useStyles();

  if (!favorites || favorites.length === 0) {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.emptyText}>No favorites yet</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={favorites}
        keyExtractor={item => item.placeId}
        horizontal
        renderItem={data => (<FavoritesAvatar restaurant={data.item} />)}
      />
    </View>
  );
};