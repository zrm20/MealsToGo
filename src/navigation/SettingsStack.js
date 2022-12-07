import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen, RestaurantDetailsScreen, FavoritesScreen } from '../components/screens';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SettingsHome" component={SettingsScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "modal"
        }}
      >
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="FavoriteDetails" component={RestaurantDetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
};