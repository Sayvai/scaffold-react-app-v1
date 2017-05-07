import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import styles from './app.scss';
import Header from './header/Header';
import Home from './home/Home';
import GitUsersContainer from '../containers/GitUsersContainer';

function App() {
  return (
    <Router history={browserHistory}>
      <div className={styles.app}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/gitusers" component={GitUsersContainer} />
      </div>
    </Router>);
}

export default App;
