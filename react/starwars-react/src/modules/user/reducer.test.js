import { userReducer, initialState } from './reducer';
import { setCharacterLoading } from './actions';

describe('User reducer', () => {
  it('sets character correctly', () => {
    const character = { name: 'luke' };
    const state = userReducer(initialState, { type: 'SET_CHARACTER', character });
    expect(state.character).toBe(character);
  });

  it('sets character loading correctly', () => {
    const state = userReducer(initialState, setCharacterLoading(true));
    expect(state.characterLoading).toBe(true);
  });
});
