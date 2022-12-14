import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export function restaurantRequest(location = "37.7749295,-122.4194155") {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      return setTimeout(() => reject(`Location [${location}] not found`), 1000);
    };

    return setTimeout(() => resolve(mock), 1000);
  });
};

export function transformRestaurantResult(result) {
  if (!result || !result.results) {
    return []
  };

  // api should return a result with a results property that should be array
  const { results = [] } = result;

  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return (
      {
        ...restaurant,
        address: restaurant.vicinity,
        // add our own isOpenNow propery at root of object
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        // add our own isClosedTemporarily based on business status
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      }
    )
  });

  return camelize(mappedResults);
};