import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../UI/Button";
import { Ionicons } from '@expo/vector-icons';

import ModalView from "../UI/ModalView";
import { useRestaurantById } from "../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../features/restaurants/RestaurantInfoCard";
import OpenHoursList from '../features/restaurants/OpenHoursList';
import Text from "../UI/Text";
import openMap from "../../utils/openMap";
import ScreenSafeArea from "../UI/ScreenSafeArea";

export default function RestaurantDetailsScreen({ navigation, route }) {
  const { id } = route.params;
  const restaurant = useRestaurantById(id);

  if (!restaurant) {
    return (
      <ScreenSafeArea>
        <ModalView>
          <Text variant="error">Oh No, Something went wrong!</Text>
          <Ionicons name='alert-circle-outline' size={50} />
          <Button onPress={() => navigation.goBack()}>Go Back</Button>
        </ModalView>
      </ScreenSafeArea>
    )
  }

  return (
    <ScreenSafeArea>
      <ModalView>
        <RestaurantInfoCard restaurant={restaurant} />
        <View style={styles.listContainer}>
          <OpenHoursList />
        </View>
        {
          restaurant.address &&
          <Button
            mode="contained"
            icon="directions"
            onPress={() => openMap(restaurant.address, restaurant.name)}
          >
            Navigate
          </Button>
        }
        <Button onPress={() => navigation.goBack()}>Go Back</Button>
      </ModalView>
    </ScreenSafeArea>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  }
})