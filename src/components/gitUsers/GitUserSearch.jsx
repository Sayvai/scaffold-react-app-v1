import React from 'react';
import PropTypes from 'prop-types';

const GitUserSearch = ({ onSubmitCb }) => (
  <form onSubmit={onSubmitCb}>
    <input type="text" name="username" placeholder="Enter a GitHub username" />
    <button type="submit">Search User</button>
  </form>
);

GitUserSearch.propTypes = {
  onSubmitCb: PropTypes.func.isRequired,
};

export default GitUserSearch;
