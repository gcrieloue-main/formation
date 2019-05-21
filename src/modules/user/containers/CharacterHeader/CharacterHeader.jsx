import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader } from '../../../common-ui';
import { fetchAndSetCharacter } from '../../actions';

import styles from './styles.scss';

export const mapStateToProps = state => ({
  character: state.user.character,
  characterLoading: state.user.characterLoading,
});

export const mapDispatchToProps = dispatch => ({
  setDefaultCharacter: () => dispatch(fetchAndSetCharacter(1)),
});

export const CharacterHeaderComponent = ({ setDefaultCharacter, characterLoading, character }) => {
  useEffect(() => {
    if (!character) {
      setDefaultCharacter();
    }
  });
  if (characterLoading) {
    return <Loader />;
  }
  return (
    <div>
      {character ? (
        <p className={styles.user}>
          You are <span className={styles.name}>{character.name}</span>
        </p>
      ) : null}
    </div>
  );
};

CharacterHeaderComponent.propTypes = {
  setDefaultCharacter: PropTypes.func.isRequired,
  characterLoading: PropTypes.bool.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    species: PropTypes.arrayOf(PropTypes.string),
    vehicles: PropTypes.arrayOf(PropTypes.string),
    starships: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

CharacterHeaderComponent.defaultProps = {
  character: null,
};

export const CharacterHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterHeaderComponent);
