import React from 'react';
import styles from './home.scss';

export default class Home extends React.Component {
  render() {
    return (
     <div className={styles.home}>
        <p>Hello world, welcome home!</p>
      </div>)
  }
}