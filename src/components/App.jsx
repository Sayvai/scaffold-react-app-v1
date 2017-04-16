import React from 'react';
import styles from './app.scss';

export default class App extends React.Component {
  render() {
    return (
     <div className={styles.app}>
        <h1>Hello World</h1>
      </div>);
  }
}