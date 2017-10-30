import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultUser = Object.freeze({
  currentUser: null,
  userImg: null,
  id: null
});

const SessionReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser.user.username,
        userImg: action.currentUser.user.image, id: action.currentUser.user.id });
    default:
      return state;
  }
};

export default SessionReducer;
