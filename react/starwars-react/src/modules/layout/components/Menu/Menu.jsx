import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.scss';

export const Menu = () => (
  <div className={styles.menu}>
    <NavLink to="/" className={styles.link} exact activeClassName={styles.linkActive}>
      People
    </NavLink>
    <NavLink to="/ship" className={styles.link} activeClassName={styles.linkActive}>
      Ship
    </NavLink>
  </div>
);
