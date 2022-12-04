import { locations } from "./LOCATION_MOCK";

export function locationRequest(keyword = "") {
  return new Promise((resolve, reject) => {
    if (typeof keyword !== 'string') {
      keyword = keyword.toString()
    };

    const result = locations[keyword.toLowerCase()];

    if (!result) {
      return setTimeout(() => reject('No location found'), 1000);
    };

    return setTimeout(() => resolve(result), 1000);
  });
};

export function transformLocationResponse(response) {
  if (!response) {
    return null;
  };

  const { results } = response;
  if (!results || !results.length) {
    return null;
  };

  const topResult = results[0];

  const location = topResult.geometry?.location;

  location.viewport = topResult.geometry.viewport;

  return location;
};