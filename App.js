import React from "react";
import { StyleSheet, Text, SafeAreaView, View, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer} />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    width: "100%",
    backgroundColor: "green",
    padding: 16,
  },
  listContainer: {
    backgroundColor: "blue",
    flexGrow: 1,
    width: "100%",
  },
});
