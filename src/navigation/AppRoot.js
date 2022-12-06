import React from "react";
import LoginScreen from "../components/screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { useAuth } from "../services/auth/auth.context";
import LoadingScreen from "../components/screens/LoadingScreen";

export default function AppRoot() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  if (!user) {
    return <LoginScreen />
  };

  return <TabNavigator />
};