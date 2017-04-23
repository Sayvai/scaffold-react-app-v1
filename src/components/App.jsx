import React from 'react'
import styles from './app.scss'
import Header from './header/Header.jsx'
import GitUsersContainer from '../containers/GitUsersContainer'

export default class App extends React.Component {
  render() {
    return (
     <div className={styles.app}>
        <Header/>
        <h1>Hello World</h1>
        <GitUsersContainer/>
      </div>)
  }
}