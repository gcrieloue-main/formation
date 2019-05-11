import { SET_CHARACTER, SET_CHARACTER_LOADING, SET_FAVORITE_SHIPS, UNSET_FAVORITE_SHIPS } from './actions';

export const initialState = {
  character: null,
  characterLoading: false,
  favoriteShips: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER: {
      return { ...state, character: action.character };
    }
    case SET_CHARACTER_LOADING: {
      return { ...state, characterLoading: !!action.loading };
    }
    case SET_FAVORITE_SHIPS: {
      if (state.favoriteShips.some(s => s.url === action.ship.url)) return state;
      return { ...state, favoriteShips: [...state.favoriteShips, action.ship] };
    }
    case UNSET_FAVORITE_SHIPS: {
      return { ...state, favoriteShips: state.favoriteShips.filter(s => s.name !== action.ship.name) };
    }
    default:
      return state;
  }
};
