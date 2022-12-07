import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RestaurantsScreen from '../components/screens/RestaurantsScreen';
import { RestaurantDetailsScreen } from "../components/screens";

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="RestaurantsHome" component={RestaurantsScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "modal"
        }}
      >
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
};