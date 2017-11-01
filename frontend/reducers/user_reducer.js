import { RECEIVE_USER, RECEIVE_UPDATED_USER } from '../actions/user_actions';
import { RECEIVE_CHECKIN } from '../actions/checkin_actions';
import { RECEIVE_ALL_BEERS, RECEIVE_BEER } from '../actions/beer_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_UPDATED_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_CHECKIN:
      return Object.assign({}, state, action.users );
    case RECEIVE_ALL_BEERS:
      return Object.assign({}, state, { [action.beers.user.id]: action.beers.user });
    case RECEIVE_BEER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default UserReducer;
