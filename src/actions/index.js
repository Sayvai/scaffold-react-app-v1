import 'whatwg-fetch'

export const REQUEST_GITHUB_USER = 'REQUEST_GITHUB_USER'
export const RECEIVE_GITHUB_USER = 'RECEIVE_GITHUB_USER'

const requestGitHubUser = (username) => {
  return {
    type: REQUEST_GITHUB_USER,
    username
  }
}

const receiveGitHubUser = (username, data) => {
  return {
    type: RECEIVE_GITHUB_USER,
    username,
    data
  }
}

export function fetchGitHubUser(username) {
  return (dispatch) => {
    dispatch(requestGitHubUser(username))

    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json()
      .then(json => dispatch(receiveGitHubUser(username, json))))
  }
}