import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../constants";

const reducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.entities.session = action.currentUser;
      return newState;
    case LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      throw new Error("No action specified");
  }
};

export default reducer;

// const initialState = {
//     entities: {
//         repositories: {},
//         users: {},
//         issues: {},
//         comments: {},
//         ui: {loading: false},
//         errors: {},
//         session: {}
//     }
// };
