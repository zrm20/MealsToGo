import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchText, setSerachText] = useState("");
  return (
    <>
      <SafeAreaView style={styles.root}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            value={searchText}
            onChange={setSerachText}
          />
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
    padding: 16,
  },
  listContainer: {
    backgroundColor: "blue",
    flexGrow: 1,
    width: "100%",
  },
});
