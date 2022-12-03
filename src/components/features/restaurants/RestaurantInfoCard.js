import React from "react";
import { SvgXml } from "react-native-svg";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  RatingContainer,
  StatusContainer,
  StatusIcon,
  TypeIcon,
  ClosedTemporarily,
  IconRow,
  Address
} from "./RestaurantInfoCard.styles";
import Text from "../../../components/UI/Text";
import star from '../../../../assets/star';
import openIcon from '../../../../assets/open';

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name,
    icon,
    address,
    isOpenNow,
    rating,
    placeId,
    photos = [],
    isClosedTemporarily,
  } = restaurant;

  let ratingArray;
  if (rating) {
    ratingArray = Array.from(new Array(Math.ceil(rating)));
  }

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <Text variant="label">{name}</Text>
        <IconRow>
          {
            rating &&
            <RatingContainer>
              {
                ratingArray.map((el, i) => (
                  <SvgXml xml={star} width={20} height={20} key={i} />
                ))
              }
            </RatingContainer>
          }
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
