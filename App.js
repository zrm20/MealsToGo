import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { init } from "./src/config/firebase";

import theme from './src/theme';
import { AuthProvider } from "./src/services/auth/auth.context";
import AppRoot from "./src/navigation/AppRoot";


export default function App() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <AppRoot />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};
