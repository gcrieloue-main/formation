import React, { useState, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCharacter as setUser } from '../../../user/actions';
import { Loader, Button } from '../../../common-ui';
import { swAPI } from '../../../swapi';

import styles from './styles.scss';

export const PeopleInfoComponent = ({ match, currentUser, setCurrentUser }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    swAPI.getCharacter(match.params.id).then(c => setCharacter(c));
  }, [match.params.id]);

  if (!character) return <Loader />;

  return (
    <div className={styles.info}>
      <h2>{character.name}</h2>
      <div className={styles.robothash}>
        <img src={`https://robohash.org/${character.name}.png`} alt="robothash" />
      </div>
      <div className={styles.data}>
        <div className={styles.row}>
          <div>Gender :</div>
          <div>{character.gender}</div>
        </div>
        <div className={styles.row}>
          <div>Birth year :</div>
          <div>{character.birth_year}</div>
        </div>
        <div className={styles.row}>
          <div>Height :</div>
          <div>{character.height}cm</div>
        </div>
        <div className={styles.row}>
          <div>Hair color :</div>
          <div>{character.hair_color}</div>
        </div>
        <div className={styles.row}>
          <div>Skin color :</div>
          <div>{character.skin_color}</div>
        </div>
        {currentUser && currentUser !== character.name && (
          <div className={styles.setuser}>
            <Button onClick={() => setCurrentUser(character)} secondary>
              Set as current character
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

PeopleInfoComponent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  currentUser: PropTypes.string,
  setCurrentUser: PropTypes.func.isRequired,
};

PeopleInfoComponent.defaultProps = {
  currentUser: null,
};

const mapStateToProps = state => ({
  currentUser: state.user.character ? state.user.character.name : null,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: character => dispatch(setUser(character)),
});

export const PeopleInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleInfoComponent);
