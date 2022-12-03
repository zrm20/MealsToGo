import React from "react";
import { SvgXml } from "react-native-svg";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  RatingContainer,
  StatusContainer, TypeIcon,
  ClosedTemporarily,
  IconRow,
  Address
} from "./restaurant-info-card.styles";
import Text from "../../../components/typography/text.component";
import star from '../../../../assets/star';
import openIcon from '../../../../assets/open';

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
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <Text variant="label">{name}</Text>
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
              <ClosedTemporarily variant="caption">Temporarily Closed</ClosedTemporarily>
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
