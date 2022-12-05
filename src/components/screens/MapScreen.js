import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../../services/location/location.context";
import { useRestaurants } from "../../services/restaurants/restaurant.context";
import LocationSearch from "../features/LocationSearch/LocationSearch";

import SafeArea from "../UI/SafeArea";

export default function MapScreen(props) {
  const { location } = useLocation();
  const { restaurants = [] } = useRestaurants();

  return (
    <>
      <SafeArea style={styles.searchBarContainer}>
        <LocationSearch style={styles.searchBar} containerProps={{ style: styles.searchBarContainer }} />
      </SafeArea>
      <MapView
        style={styles.map}
        region={
          {
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: .1,
            longitudeDelta: .1
          }
        }
      >
        {
          restaurants.map(restaurant => (
            <Marker
              key={restaurant.placeId}
              coordinate={{
                latitude: restaurant.geometry?.location?.lat || null,
                longitude: restaurant.geometry?.location?.lng || null
              }}
              title={restaurant.name}
            />
          ))
        }
      </MapView>
    </>
  );
};

const styles = StyleSheet.create(
  {
    container: {

    },
    map: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    searchBarContainer: {
      width: '100%',
      zIndex: 100,
    },
    searchBar: {
    }
  }
);
