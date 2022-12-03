import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ModalView from "../UI/ModalView";
import { useRestaurantById } from "../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../features/restaurants/RestaurantInfoCard";

export default function RestaurantDetailsScreen({ navigation, route }) {
  const { id } = route.params;
  const restaurant = useRestaurantById(id);

  if (!restaurant) {
    <ModalView>
      <Text>Nothing to see here</Text>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </ModalView>
  }

  return (
    <ModalView>
      <View style={{ width: '100%' }}>
        <RestaurantInfoCard restaurant={restaurant} />
      </View>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </ModalView>
  );
};
