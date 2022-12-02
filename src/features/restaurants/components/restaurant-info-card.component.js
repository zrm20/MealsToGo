import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarilty = false,
  } = restaurant;

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} key={name} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
