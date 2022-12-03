import styled from 'styled-components/native';
import { Card } from "react-native-paper";
import Text from '../../../components/typography/text.component';
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const IconRow = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[1]};
  padding-bottom: ${props => props.theme.space[1]};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const StatusIcon = styled(SvgXml)`
  margin-right:${props => props.theme.space[3]};
`;

export const ClosedTemporarily = styled(Text)`
color: ${props => props.theme.colors.ui.error};
margin-right: ${props => props.theme.space[3]};
`;

export const TypeIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: ${props => props.theme.space[3]};
`;