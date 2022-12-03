import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import RestaurantsScreen from "../features/restaurants/screens/restaurants.screen";

const DUMMY_MAP = () => <View><Text>MAPS</Text></View>
const DUMMY_SETTINGS = () => <View><Text>SETTINGS</Text></View>

const Tabs = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings-outline"
};

const screenOptions = ({ route }) => ({
  tabBarIcon: () => (<Ionicons name={TAB_ICON[route.name]} size={24} />),
  headerShown: false
});

export default function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={screenOptions}
    >
      <Tabs.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tabs.Screen name="Map" component={DUMMY_MAP} />
      <Tabs.Screen name="Settings" component={DUMMY_SETTINGS} />
    </Tabs.Navigator>
  );
};
