import { connect } from 'react-redux';
import { fetchGitHubUser } from '../actions';
import GitUsers from '../components/gitUsers/GitUsers';

const mapStateToProps = state => (
  {
    userData: state.githubUser.githubData,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onSubmit: (evt) => {
      evt.preventDefault();
      dispatch(fetchGitHubUser(evt.target.querySelector('input[name=username]').value));
    },
  }
);

const GitUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GitUsers);

export default GitUsersContainer;
