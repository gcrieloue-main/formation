import { SET_CHARACTER, SET_CHARACTER_LOADING } from './actions';

const initialState = {
  character: null,
  characterLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER: {
      return { ...state, character: action.character };
    }
    case SET_CHARACTER_LOADING: {
      return { ...state, characterLoading: !!action.loading };
    }
    default:
      return state;
  }
};
