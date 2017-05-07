import { REQUEST_GITHUB_USER, RECEIVE_GITHUB_USER } from '../actions';

const githubUser = (state = {}, action) => {
  let stateExtended;
  switch (action.type) {
    case REQUEST_GITHUB_USER:
      stateExtended = {
        isFetching: true,
        githubUsername: action.username,
        githubData: null,
      };

      return Object.assign({}, state, stateExtended);
    case RECEIVE_GITHUB_USER:
      stateExtended = {
        isFetching: false,
        githubUsername: action.username,
        githubData: action.data,
      };

      return Object.assign({}, state, stateExtended);
    default:
      return state;
  }
};

export default githubUser;
