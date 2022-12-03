import styled from "styled-components";

import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import Text from "../../../components/UI/Text";

export const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  align-items: center;
`;

export const FetchingSpinner = styled(LoadingSpinner)`
  margin-top: ${props => props.theme.space[3]};
`;

export const ErrorMessage = styled(Text)
  .attrs({
    variant: "error"
  })`
    margin-top: ${props => props.theme.space[3]}
  `;