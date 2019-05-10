import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

export const CharacterList = ({ characters }) => {
  const sub =
    characters &&
    characters.map(c => {
      const id = c.url.match(/.*\/([0-9]+)\/$/)[1];
      const url = `/people/${id}`;
      return (
        <NavLink to={url} key={c.url} className="link">
          <div className={styles.line}>
            <div className={styles.name}>{c.name}</div>
            <div className={styles.height}>{c.height}</div>
            <div className={styles.birth}>{c.birth_year}</div>
          </div>
        </NavLink>
      );
    });

  const header = (
    <div className={`${styles.line} ${styles.header}`}>
      <div className={styles.name}>Name</div>
      <div className={styles.height}>heigth</div>
      <div className={styles.birth}>Birth Year</div>
    </div>
  );
  return (
    <div className={styles.result}>
      {characters && !characters.length && <p>Sorry, this character is yet to be added to the Star Wars universe...</p>}
      {characters && characters.length > 0 && header}
      {characters && characters.length > 0 && sub}
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

CharacterList.defaultProps = {
  characters: null,
};
