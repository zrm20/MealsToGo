import React from "react";
import { IconButton, Colors } from "react-native-paper";
import { useTheme } from "styled-components";

import { useFavorites } from "../../../services/favorites/favorites.context";

export default function FavoriteButton({ restaurant, size = 25, ...props }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { colors } = useTheme()

  if (!restaurant) {
    throw new Error('Restaurant prop is required');
  };

  const favorite = isFavorite(restaurant);

  const iconColor = props.color || colors.ui.error;

  function handlePress() {
    toggleFavorite(restaurant);
  };

  return (
    <IconButton
      icon={favorite ? "heart" : "heart-outline"}
      color={iconColor}
      onPress={handlePress}
      {...props}
    />
  );
};