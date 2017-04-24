import React from 'react';
import Router, { Link } from 'react-router-dom'
import styles from './header.scss';


export default class Header extends React.Component {
  render() {
    return (
     <header className={styles.header}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gitusers">GitHub Users</Link></li>
        </ul>
      </header>)
  }
}