import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import RestaurantsStack from "./RestaurantsStack";
import { MapScreen } from "../components/screens";
import SettingsStack from "./SettingsStack";


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
      <Tabs.Screen name="Restaurants" component={RestaurantsStack} />
      <Tabs.Screen name="Map" component={MapScreen} />
      <Tabs.Screen name="Settings" component={SettingsStack} />
    </Tabs.Navigator>
  );
};
