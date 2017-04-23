import React from 'react'
import PropTypes from 'prop-types'
import styles from './gitUserDetail.scss'

const GitUserDetail = ({ userData }) => {
  if (!userData) return

  return (
    <div>
      <img src={userData.avatar_url} alt={`Avatar of ${userData.login}`} title={`Avatar of ${userData.login}`} />
    </div>
  )
}

GitUserDetail.propTypes = {
  userData: PropTypes.object
}

export default GitUserDetail