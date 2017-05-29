import React from 'react';
import PropTypes from 'prop-types';
import styles from './gitUserSearch.scss';

const GitUserSearch = ({ onSubmitCb }) => (
  <div className={styles.gitUserSearch}>
    <form onSubmit={onSubmitCb}>
      <input type="text" name="username" placeholder="Enter a GitHub username" />
      <button type="submit">Search User</button>
    </form>
    <small>*This page is to explore making API web service calls via the react-redux setup.</small>
  </div>
);

GitUserSearch.propTypes = {
  onSubmitCb: PropTypes.func.isRequired,
};

export default GitUserSearch;
