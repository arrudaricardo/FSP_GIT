import * as sessionAPI from "../../util/session_api_util";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../constants";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch =>
  sessionAPI.signup(user).then(resp => dispatch(receiveCurrentUser(resp.data)));

export const login = user => dispatch =>
  sessionAPI.login(user).then(resp => dispatch(receiveCurrentUser(resp.data)));

export const logout = user => dispatch =>
  sessionAPI.logout(user).then(() => dispatch(logoutCurrentUser()));

