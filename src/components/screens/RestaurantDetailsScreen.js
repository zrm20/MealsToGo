import React from "react";
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";

import Button from "../UI/Button";
import ModalView from "../UI/ModalView";
import { useRestaurantById } from "../../services/restaurants/restaurant.context";
import RestaurantInfoCard from "../features/restaurants/RestaurantInfoCard";
import Text from "../UI/Text";
import openMap from "../../utils/openMap";
import ScreenSafeArea from "../UI/ScreenSafeArea";
import useStyles from "./RestaurantDetailsScreen.styles";
import RestaurantMap from "../features/restaurants/RestaurantMap";

export default function RestaurantDetailsScreen({ navigation, route }) {
  const { restaurant } = route.params;
  const styles = useStyles();

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

        <RestaurantMap restaurant={restaurant} style={styles.map} />

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