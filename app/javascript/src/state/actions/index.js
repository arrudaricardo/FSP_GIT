import * as sessionAPI from "../../util/session_api_util";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  GET_REPOSITORIES,
  DELETE_REPOSITORY,
  GET_REPOSITORY
} from "../constants";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = error => ({
  type: RECEIVE_SESSION_ERRORS,
  error
});

export const receiveRepos = repos => ({
  type: GET_REPOSITORIES,
  repos
});

export const receiveRepo = repo => ({
  type: GET_REPOSITORY,
  repo
});

export const deleteRepository = () => ({
  type: DELETE_REPOSITORY
});

// Session Actions
export const signup = user => dispatch =>
  sessionAPI
    .signup(user)
    .then(resp => dispatch(receiveCurrentUser(resp.data)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const login = user => dispatch =>
  sessionAPI
    .login(user)
    .then(resp => dispatch(receiveCurrentUser(resp.data)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const logout = () => dispatch =>
  sessionAPI
    .logout()
    .then(() => dispatch(logoutCurrentUser()))
    .catch(resp => dispatch(receiveErrors(resp)));

// Repository actions
export const getRepos = () => dispatch =>
  sessionAPI
    .getRepos()
    .then(resp => dispatch(receiveRepo(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const getRepo = repoId => dispatch =>
  sessionAPI
    .getRepo(repoId)
    .then(resp => dispatch(receiveRepo(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const createRepo = repo => dispatch =>
  sessionAPI
    .createRepo(repo)
    .then(resp => dispatch(receiveRepo(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const deleteRepo = repoId => dispatch =>
  sessionAPI
    .deleteRepo(repoId)
    .then(() => dispatch(deleteRepository()))
    .catch(resp => dispatch(receiveErrors(resp)));

