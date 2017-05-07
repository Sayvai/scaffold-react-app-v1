import React from 'react';
import PropTypes from 'prop-types';

const GitUserDetail = ({ userData }) => {
  if (userData) {
    return (
      <div>
        <img src={userData.avatar_url} alt={`Avatar of ${userData.login}`} title={`Avatar of ${userData.login}`} />
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
