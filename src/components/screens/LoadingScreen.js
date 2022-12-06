import React from "react";
import { View, StyleSheet } from "react-native";
import { LoadingSpinner, ScreenSafeArea } from "../UI";

export default function LoadingScreen(props) {
  return (
    <ScreenSafeArea style={styles.container}>
      <LoadingSpinner />
    </ScreenSafeArea>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
);
