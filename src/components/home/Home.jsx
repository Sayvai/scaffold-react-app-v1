import React from 'react';
import styles from './home.scss';

function Home() {
  return (
    <div className={styles.home}>
      <p>Welcome to this simple ES2015+ React starter basic skeletal project.</p>
      <p>The main purpose of this project is to explore and utilise the
         latest front-end technologies that is current (as of May 2017)</p>
      <p>This project utilises the main technologies listed below:</p>
      <ul>
        <li><a href="https://facebook.github.io/react/docs/react-dom.html" target="_blank" rel="noopener noreferrer">react-dom</a> (15.5.4)</li>
        <li><a href="https://github.com/reactjs/react-redux" target="_blank" rel="noopener noreferrer">react-redux</a> (5.0.4)</li>
        <li><a href="https://github.com/reacttraining/react-router" target="_blank" rel="noopener noreferrer">react-router-dom</a> (4.1.1)</li>
        <li><a href="https://github.com/gaearon/redux-thunk" target="_blank" rel="noopener noreferrer">redux-thunk</a> (2.2.0)</li>
        <li><a href="https://github.com/whatwg/fetch" target="_blank" rel="noopener noreferrer">whatwg-fetch</a> (2.0.3)</li>
        <li><a href="https://webpack.github.io/" target="_blank" rel="noopener noreferrer">webpack</a> (2.4.1)</li>
        <li><a href="https://github.com/babel/babel" target="_blank" rel="noopener noreferrer">babel</a> (6.24.1)</li>
        <li><a href="https://github.com/eslint/eslint" target="_blank" rel="noopener noreferrer">eslint</a> (using airbnb eslint config)</li>
        <li><a href="https://facebook.github.io/jest/" target="_blank" rel="noopener noreferrer">jest</a> (19.0.2)</li>
        <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodeJS</a> (7.7.1)</li>
        <li><a href="https://github.com/yarnpkg/yarn" target="_blank" rel="noopener noreferrer">yarn</a> (0.23.4)</li>
      </ul>
    </div>
  );
}

export default Home;
