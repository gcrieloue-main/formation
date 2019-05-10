import qs from 'qs';

const SWAPI_URL = 'https://swapi.co/api';

export const swAPI = {
  getCharacter: id => fetch(`${SWAPI_URL}/people/${id}`).then(response => response.json()),
  getCharacterList: search =>
    fetch(`${SWAPI_URL}/people${qs.stringify({ search }, { addQueryPrefix: true })}`).then(response => response.json()),
};
