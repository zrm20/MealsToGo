import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function RestaurantMap({ restaurant, markerProps = {}, ...props }) {
  return (
    <MapView
      region={{
        latitude: restaurant.geometry?.location?.lat,
        longitude: restaurant.geometry?.location?.lng,
        latitudeDelta: .01,
        longitudeDelta: .01
      }}
      {...props}
    >
      <Marker
        coordinate={{
          latitude: restaurant.geometry?.location?.lat,
          longitude: restaurant.geometry?.location?.lng,
        }}
        title={restaurant.name}
        {...markerProps}
      />
    </MapView>
  );
};