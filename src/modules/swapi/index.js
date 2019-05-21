import qs from 'qs';

const SWAPI_URL = 'https://swapi.co/api';

export const swAPI = {
  getCharacter: id => fetch(`${SWAPI_URL}/people/${id}`).then(response => response.json()),
  getCharacterList: (search, page) =>
    fetch(`${SWAPI_URL}/people${qs.stringify({ search, page }, { addQueryPrefix: true })}`).then(response =>
      response.json()
    ),
  getStarship: id => fetch(`${SWAPI_URL}/starships/${id}`).then(response => response.json()),
  getStarshipList: (search, page) =>
    fetch(`${SWAPI_URL}/starships${qs.stringify({ search, page }, { addQueryPrefix: true })}`).then(response =>
      response.json()
    ),
};
