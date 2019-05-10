import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

export const Button = ({ children, onClick, className, secondary }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.button, className, { [styles.secondary]: secondary })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  children: 'OK',
  onClick: undefined,
  className: undefined,
  secondary: false,
};
