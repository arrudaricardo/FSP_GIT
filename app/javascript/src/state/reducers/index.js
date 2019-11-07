import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS,
  GET_REPOSITORY,
  GET_REPOSITORIES,
  DELETE_REPOSITORY,
  RECEIVE_USER
} from "../constants";

const reducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.session.currentUser = action.user.user.information;
      newState.entities.users[action.user.user.information.username] = {
        repositories: action.user.user.repositories
      };

      for (let repo of action.user.user.repositories) {
        newState.entities.repositories[repo.id] = repo;
      }

      return newState;

    case LOGOUT_CURRENT_USER:
      newState.session.currentUser = null;
      return newState;

    case RECEIVE_SESSION_ERRORS:
      newState.errors.push(action.error.response.data);
      return newState;

    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;

    case RECEIVE_USER:
      newState.entities.users[action.user.data.user.information.username] = {
        info: action.user.data.user.information,
        repositories: action.user.data.user.repositories
      };

      for (let repo of action.user.data.user.repositories) {
        newState.entities.repositories[repo.id] = repo;
      }
      return newState;

    case GET_REPOSITORIES:
      for (let repo of action.repos) {
        newState.entities.repositories[repo.id] = repo;
      }
      return newState;

    case GET_REPOSITORY:
      newState.entities.repositories[action.repo.data.id] = action.repo.data;
      return newState;

    case DELETE_REPOSITORY:
      delete newState.entities.repositories[action.repoId];
      return newState;

    default:
      throw new Error("No action specified!");
  }
};

export default reducer;

