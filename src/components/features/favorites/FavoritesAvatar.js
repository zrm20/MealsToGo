import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import useStyles from "./FavoritesAvatar.styles";

export default function FavoritesAvatar({ restaurant, size = 75 }) {
  const styles = useStyles({ size });
  const { navigate } = useNavigation();

  function handlePress() {
    navigate("RestaurantDetails", { restaurant })
  };

  return (
    <TouchableOpacity onPress={handlePress} >
      <View style={styles.container}>
        <Avatar.Image
          source={{ uri: restaurant.photos[0] }}
          size={size * .8}
          style={styles.image}
        />
        <Text
          adjustFontSizeToFit
          numberOfLines={1}
          style={styles.text}
        >
          {restaurant.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
};