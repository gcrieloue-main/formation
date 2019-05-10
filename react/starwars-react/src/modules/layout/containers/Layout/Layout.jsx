import React from 'react';
import PropTypes from 'prop-types';
import { CharacterHeader } from '../../../user';
import { Menu } from '../../components/Menu';
import styles from './styles.scss';

export const Layout = ({ children }) => (
  <div>
    <div className={styles.header}>
      <h1 className={styles.title}>Star Wars App</h1>
      <Menu />
      <CharacterHeader />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
