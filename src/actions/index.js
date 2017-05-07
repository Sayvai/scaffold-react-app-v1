import 'whatwg-fetch';

export const REQUEST_GITHUB_USER = 'REQUEST_GITHUB_USER';
export const RECEIVE_GITHUB_USER = 'RECEIVE_GITHUB_USER';

const requestGitHubUser = username => (
  {
    type: REQUEST_GITHUB_USER,
    username,
  }
);

const receiveGitHubUser = (username, data) => (
  {
    type: RECEIVE_GITHUB_USER,
    username,
    data,
  }
);

export function fetchGitHubUser(username) {
  return (dispatch) => {
    dispatch(requestGitHubUser(username));

    // disable lint on fetch() since whatwg-fetch is a polyfill
    // eslint-disable-next-line no-undef
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json()
      .then(json => dispatch(receiveGitHubUser(username, json))));
  };
}
