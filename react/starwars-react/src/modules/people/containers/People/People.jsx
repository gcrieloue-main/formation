import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TextInput, Button, Loader } from '../../../common-ui';
import styles from './styles.scss';
import { swAPI } from '../../../swapi';
import { CharacterList } from '../../components/CharacterList';
import { setRandomCurrentCharacter } from '../../../user/actions';

export const PeopleComponent = ({ setRandomCharacter }) => {
  const [value, setValue] = useState('');
  const [characterList, setCharacterList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // init
  useEffect(() => {
    setIsLoading(true);
    swAPI.getCharacterList(value).then(d => {
      setCharacterList(d.results);
      setIsLoading(false);
    });
  }, []);

  const onSearch = () => {
    setIsLoading(true);
    swAPI.getCharacterList(value).then(d => {
      setCharacterList(d.results);
      setIsLoading(false);
    });
  };

  return (
    <div className={styles.people}>
      <div className={styles.search}>
        <p>
          <TextInput
            placeHolder="Character name ..."
            label="Character search :"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <Button onClick={onSearch} className={styles.button}>
            Search
          </Button>
        </p>
      </div>
      {isLoading && <Loader />}
      {!isLoading && <CharacterList characters={characterList} />}
      <div className={styles.randomUser}>
        <Button secondary onClick={setRandomCharacter}>
          ↻ Random character
        </Button>
      </div>
    </div>
  );
};

PeopleComponent.propTypes = {
  setRandomCharacter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setRandomCharacter: () => dispatch(setRandomCurrentCharacter()),
});

export const People = connect(
  null,
  mapDispatchToProps
)(PeopleComponent);
