import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import RestaurantsStack from "./RestaurantsStack";
import MapScreen from "../components/screens/MapScreen";
import SettingsScreen from "../components/screens/SettingsScreen";


const Tabs = createBottomTabNavigator();

const TAB_ICON = {
  RestaurantsStack: "restaurant-outline",
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
      <Tabs.Screen name="RestaurantsStack" component={RestaurantsStack} />
      <Tabs.Screen name="Map" component={MapScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};
