import React from 'react';
import styles from './header.scss';

export default class Header extends React.Component {
  render() {
    return (
     <header className={styles.header}>
        <ul>
          <li>Home</li>
          <li>GitHub Users</li>
        </ul>
      </header>)
  }
}