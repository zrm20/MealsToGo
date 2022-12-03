import React, { useState } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea, SearchContainer, RestaurantList } from './restaurants.styles';

function renderRestaurantCard(restaurant) {
  return <RestaurantInfoCard />
};

export default function RestaurantsScreen() {
  const [searchText, setSerachText] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchText}
          onChange={setSerachText}
        />
      </SearchContainer>
      <RestaurantList
        data={[1, 2, 3]}
        renderItem={renderRestaurantCard}
      />
    </SafeArea>
  );
};
