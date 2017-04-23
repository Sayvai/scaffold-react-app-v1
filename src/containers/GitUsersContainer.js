import { connect } from 'react-redux'
import { fetchGitHubUser } from '../actions'
import GitUsers from '../components/gitUsers/gitUsers.jsx'

const mapStateToProps = (state) => {

  return {
    userData: state.githubUser.githubData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (evt) => {
      evt.preventDefault();
      dispatch(fetchGitHubUser(evt.target.querySelector('input[name=username]').value))
    }
  }
}

const GitUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitUsers)

export default GitUsersContainer