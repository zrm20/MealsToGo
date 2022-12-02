import React from "react";
import styled from 'styled-components/native'
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Image } from "react-native";

import star from '../../../../assets/star';
import openIcon from '../../../../assets/open';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.heading};
  color: ${props => props.theme.colors.ui.primary}
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const IconRow = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[1]};
  padding-bottom: ${props => props.theme.space[1]};
`;

const RatingContainer = styled.View`
  flex-direction: row;
`;

const StatusContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

const StatusIcon = styled(SvgXml)`
  margin-right:${props => props.theme.space[3]};
`;

const ClosedTemporarily = styled.Text`
color: ${props => props.theme.colors.ui.error};
margin-right: ${props => props.theme.space[3]};
font-family: ${props => props.theme.fonts.body};
font-size: ${props => props.theme.fontSizes.caption}
`;

const TypeIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: ${props => props.theme.space[3]};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <Title>{name}</Title>
        <IconRow>
          <RatingContainer>
            {
              ratingArray.map((el, i) => (
                <SvgXml xml={star} width={20} height={20} key={i} />
              ))
            }
          </RatingContainer>
          <StatusContainer>
            {
              !isClosedTemporarily && isOpenNow &&
              <StatusIcon xml={openIcon} height={20} width={20} />
            }
            {
              isClosedTemporarily &&
              <ClosedTemporarily>Temporarily Closed</ClosedTemporarily>
            }
            {
              icon &&
              <TypeIcon source={{ uri: icon }} />
            }
          </StatusContainer>
        </IconRow>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
