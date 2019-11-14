import * as sessionAPI from "../../util/session_api_util";
import * as repositoryAPI from "../../util/repository_api";
import * as userAPI from "../../util/user_api";
import * as rootAPI from "../../util/root_api";
import * as issueAPI from "../../util/issue_api";

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  GET_REPOSITORIES,
  DELETE_REPOSITORY,
  GET_REPOSITORY,
  RECEIVE_USER,
  RECEIVE_REPO_LS,
  RECEIVE_ISSUE,
  RECEIVE_ISSUES
} from "../constants";

export const receiveIssue = resp => ({
  type: RECEIVE_ISSUE,
  resp
});

export const receiveIssues = resp => ({
  type: RECEIVE_ISSUES,
  resp
});

export const receiveRepoLs = resp => ({
  type: RECEIVE_REPO_LS,
  resp
});

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
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

export const deleteRepository = repoId => ({
  type: DELETE_REPOSITORY,
  repoId
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
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

// user
export const getUser = userId => dispatch =>
  userAPI
    .getUser(userId)
    .then(resp => dispatch(receiveUser(resp.data)))
    .catch(resp => dispatch(receiveErrors(resp)));

// Repository actions
export const getRepos = () => dispatch =>
  repositoryAPI
    .getRepos()
    .then(resp => dispatch(receiveRepos(resp)))
    .catch(resp => dispatch(receiveErrors(resp.reponse.data)));

export const getRepo = repoId => dispatch =>
  repositoryAPI
    .getRepo(repoId)
    .then(resp => dispatch(receiveRepo(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const createRepo = repo => dispatch =>
  repositoryAPI
    .postRepo(repo)
    .then(resp => dispatch(receiveRepo(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const deleteRepo = repoId => dispatch =>
  repositoryAPI
    .deleteRepo(repoId)
    .then(() => dispatch(deleteRepository(repoId)))
    .catch(resp => dispatch(receiveErrors(resp)));

// root API
export const getRepoByUsername = (username, repo_name) => dispatch =>
  rootAPI
    .getRootApi(username, repo_name)
    .then(resp => dispatch(receiveRepo(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const getReposByUsername = username => dispatch =>
  rootAPI
    .getUserRepos(username)
    .then(resp => dispatch(receiveUser(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const getRepoLs = (username, reponame) => dispatch =>
  repositoryAPI
    .getRepoLs(username, reponame)
    .then(resp => dispatch(receiveRepoLs(resp)));

//Issues
export const createIssue = (issue, repoId) => dispatch =>
  issueAPI
    .createIssue(issue, repoId)
    .then(resp => dispatch(receiveIssue(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const getIssue = (repoId, issueId) => dispatch =>
  issueAPI
    .getIssue(repoId, issueId)
    .then(resp => dispatch(receiveIssue(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));

export const getIssues = repoId => dispatch =>
  issueAPI
    .getIssues(repoId)
    .then(resp => dispatch(receiveIssues(resp)))
    .catch(resp => dispatch(receiveErrors(resp)));
