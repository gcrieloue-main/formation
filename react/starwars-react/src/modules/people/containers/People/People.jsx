import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TextInput, Button, Loader } from '../../../common-ui';
import styles from './styles.scss';
import { swAPI } from '../../../swapi';
import { CharacterList } from '../../components/CharacterList';
import { setRandomCurrentCharacter } from '../../../user/actions';
import { Pagination } from '../../components/Pagination';

export const PeopleComponent = ({ setRandomCharacter }) => {
  const [value, setValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [page, setPage] = useState(1);
  const [nbResults, setNbResults] = useState(0);
  const [characterList, setCharacterList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = (v, p) => {
    setIsLoading(true);
    swAPI.getCharacterList(v, p).then(d => {
      setNbResults(d.count);
      setCharacterList(d.results);
      console.log(`results : ${d.count}, page: ${p}`);
      setIsLoading(false);
    });
  };

  // init
  useEffect(() => {
    search();
  }, []);

  const onSearch = () => {
    setCurrentValue(value);
    setPage(1);
    search(currentValue);
  };

  const onChange = p => {
    setPage(p);
    search(currentValue, p);
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
      <div>
        <Pagination onChange={onChange} currentPage={page} numberOfResults={nbResults} />
      </div>
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
