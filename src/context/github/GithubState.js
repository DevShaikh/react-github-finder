import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  LOADING_ON,
  LOADING_OFF,
  SET_ALERT,
} from '../types';

let client_id;
let client_secret;

if (process.env.NODE_ENV !== 'production') {
  client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  client_id = process.env.GITHUB_CLIENT_ID;
  client_secret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users:
  const searchUsers = async text => {
    dispatch({type: LOADING_ON});
    dispatch({
      type: SEARCH_USERS,
      payload: [],
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`
    );
    if (res.data.total_count === 0) {
      showAlert('No users found!', 'danger');
    } else {
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items,
      });

      dispatch({type: LOADING_OFF});
    }
  };

  // Get Single User
  const getSingleUser = async username => {
    dispatch({type: LOADING_ON});

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    dispatch({type: LOADING_OFF});
  };

  // Get single user repos
  const getSingleUserRepos = async username => {
    dispatch({type: LOADING_ON});

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
    dispatch({type: LOADING_OFF});
  };

  // Clear users
  const clearUsers = () => {
    dispatch({type: CLEAR_USERS});
  };

  // Show alert
  const showAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {msg, type},
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null,
      });
    }, 4000);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        getSingleUser,
        getSingleUserRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
