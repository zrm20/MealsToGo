import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const statusBarMargin = StatusBar.currentHeight ? StatusBar.currentHeight.toString() : "0";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${statusBarMargin}px
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flexGrow: 1;
  padding: ${props => props.theme.space[3]};
`;

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
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
