import React from "react";
import { View, StyleSheet } from "react-native";
import LoadingSpinner from "../LoadingSpinner";

export default function LoadingBackdrop() {
  return (
    <View style={styles.container}>
      <LoadingSpinner />
    </View>
  )
};

const styles = StyleSheet.create(
  {
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(100, 100, 100, .7)',
      zIndex: 100,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
);