import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../components/screens/FavoritesScreen";
import RestaurantDetailsScreen from "../components/screens/RestaurantDetailsScreen";

import SettingsScreen from '../components/screens/SettingsScreen';

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