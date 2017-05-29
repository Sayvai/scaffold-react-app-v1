import React from 'react';
import PropTypes from 'prop-types';
import styles from './gitUserDetail.scss';

const GitUserDetail = ({ userData }) => {
  if (userData) {
    return (
      <div className={styles.gitUserDetail}>
        <div id="avatar">
          <img src={userData.avatar_url} alt={`Avatar of ${userData.login}`} title={`Avatar of ${userData.login}`} />
        </div>
        <table>
          <tbody>
            <tr>
              <td>Login:</td>
              <td>{userData.login}</td>
            </tr>
            <tr>
              <td>GitHub URL:</td>
              <td><a href={`${userData.html_url}`} target="blank">{userData.html_url}</a></td>
            </tr>
            <tr>
              <td>Followers #:</td>
              <td>{userData.followers}</td>
            </tr>
            <tr>
              <td>Following #:</td>
              <td>{userData.following}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return undefined;
};

GitUserDetail.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }),
};

GitUserDetail.defaultProps = {
  userData: undefined,
};

export default GitUserDetail;
