import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>React App Starter</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gitusers">GitHub Users</Link></li>
      </ul>
    </header>
  );
}

export default Header;
