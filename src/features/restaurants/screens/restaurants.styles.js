import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { FlatList } from "react-native";

const statusBarMargin = StatusBar.currentHeight ? StatusBar.currentHeight.toString() : "0";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${statusBarMargin}px
`;

export const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs(props => ({
  contentContainerStyle: { padding: parseInt(props.theme.space[3]) }
}))``;

export const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: red;
`;