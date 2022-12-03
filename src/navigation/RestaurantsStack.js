import React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsScreen from '../components/screens/RestaurantsScreen';

const RestaurantDetails = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>DETAILS</Text>
    <Button title="Back" onPress={() => navigation.navigate("Restaurants")} />
  </View>)

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "modal"
        }}
      >
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Group>
    </Stack.Navigator>
  )
};