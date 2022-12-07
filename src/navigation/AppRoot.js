import React from "react";
import LoginScreen from "../components/screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { useAuth } from "../services/auth/auth.context";

export default function AppRoot() {
  const { user } = useAuth();

  if (!user) {
    return <LoginScreen />
  };

  return <TabNavigator />
};