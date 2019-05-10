import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export const TextInput = ({ value, onChange, placeHolder, label, type }) => (
  <span className={styles.input}>
    <label>{label}</label>
    <input type={type} placeholder={placeHolder} value={value} onChange={onChange} />
  </span>
);

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  label: PropTypes.string,
};

TextInput.defaultProps = {
  onChange: undefined,
  placeHolder: '',
  label: '',
  type: 'text',
  value: '',
};
