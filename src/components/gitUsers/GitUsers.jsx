import React from 'react'
import PropTypes from 'prop-types'
import styles from './gitUsers.scss'
import GitUserSearch from './GitUserSearch.jsx'
import GitUserDetail from './GitUserDetail.jsx'

const GitUsers = ({ onSubmit, userData }) => {
  if (!userData) return <GitUserSearch onSubmitCb={onSubmit} />

  return (
    <div className={styles.gitUsers}>
      <GitUserSearch onSubmitCb={onSubmit} />
      <GitUserDetail userData={userData} />
    </div>
  )
}

GitUsers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userData: PropTypes.object
}

export default GitUsers