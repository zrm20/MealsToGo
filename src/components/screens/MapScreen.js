import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import LocationSearch from "../features/LocationSearch/LocationSearch";

import ScreenSafeArea from "../UI/ScreenSafeArea";

export default function MapScreen(props) {
  return (
    <MapView style={styles.map}>
      <LocationSearch style={styles.searchBar} containerProps={{ style: styles.searchBarContainer }} />
    </MapView>
  );
};

const styles = StyleSheet.create(
  {
    container: {

    },
    map: {
      width: '100%',
      height: '100%'
    },
    searchBarContainer: {
      width: '100%',
      position: 'fixed',
      zIndex: 50,
      top: 50,
    },
    searchBar: {
      position: 'relative'
    }
  }
);
