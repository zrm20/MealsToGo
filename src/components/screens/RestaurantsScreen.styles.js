import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs(props => ({
  contentContainerStyle: { padding: parseInt(props.theme.space[3]) }
}))``;

export const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: red;
`;