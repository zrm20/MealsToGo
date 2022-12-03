import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";

import theme from './src/infrascructure/theme/index';
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import TabNavigator from "./src/navigation/TabNavigator";
import { RestaurantsProvider } from "./src/services/restaurants/restaurant.context";

export default function App() {

  const [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RestaurantsProvider>
            <TabNavigator />
          </RestaurantsProvider>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};
