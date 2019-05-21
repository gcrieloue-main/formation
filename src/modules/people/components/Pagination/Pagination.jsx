import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../common-ui';
import styles from './styles.scss';

export const Pagination = ({ currentPage, numberOfResults, onChange }) => {
  const resultsPerPage = 10;
  const numberOfPages = Math.floor(numberOfResults / resultsPerPage);
  const first = Math.max(currentPage - 5, 1);
  const last = Math.min(currentPage + 5, numberOfPages);

  const range = (start, end) => new Array(end - start + 1).fill(undefined).map((value, index) => index + start);
  const myRange = range(first, last);

  const pagination = myRange.map(v => (
    // eslint-disable-next-line react/no-array-index-key
    <Button key={v} onClick={() => onChange(v)} secondary={currentPage === v}>
      {v}
    </Button>
  ));
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && <Button onClick={() => onChange(currentPage - 1)}>Prev</Button>}
      {pagination}
      {currentPage < numberOfPages && <Button onClick={() => onChange(currentPage + 1)}>Next</Button>}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfResults: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
