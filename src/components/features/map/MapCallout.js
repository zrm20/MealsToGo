import React from "react";
import { View, Image as RNImage, Platform, TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import Text from "../../UI/Text";

import useStyles from "./MapCallout.styles";

const isAndroid = Platform.OS === 'android';
// Android maps have issue rendering image in Marker callout, use WebView instead
const Image = isAndroid ? WebView : RNImage;

export default function MapCallout({ restaurant, navigate }) {
  const styles = useStyles();

  function navToDetails() {
    navigate("RestaurantDetails", { id: restaurant.placeId })
  };

  return (
    <TouchableOpacity onPress={navToDetails} >
      <View style={styles.container} >
        <Image source={{ uri: restaurant.photos[0] }} style={styles.image} />
        <Text variant="caption" style={styles.text}>
          {restaurant.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};