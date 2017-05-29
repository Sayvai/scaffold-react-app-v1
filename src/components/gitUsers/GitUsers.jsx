import React from 'react';
import PropTypes from 'prop-types';
import styles from './gitUsers.scss';
import GitUserSearch from './GitUserSearch';
import GitUserDetail from './GitUserDetail';

const GitUsers = ({ onSubmit, userData }) => {
  if (!userData) return <div className={styles.gitUsers}><GitUserSearch onSubmitCb={onSubmit} /></div>;

  return (
    <div className={styles.gitUsers}>
      <GitUserSearch onSubmitCb={onSubmit} />
      <GitUserDetail userData={userData} />
    </div>
  );
};

GitUsers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }),
};

GitUsers.defaultProps = {
  userData: undefined,
};

export default GitUsers;
