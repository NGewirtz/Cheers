import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultUser = Object.freeze({
  currentUser: null,
  userImg: null
});

const SessionReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser.username, userImg: action.currentUser.img_url });
    default:
      return state;
  }
};

export default SessionReducer;
