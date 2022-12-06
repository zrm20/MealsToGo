import React from "react";
import LoginScreen from "../components/screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { useAuth } from "../services/auth/auth.context";

export default function AppRoot() {
  const { auth } = useAuth();

  if (!auth) {
    return <LoginScreen />
  };

  return <TabNavigator />
};