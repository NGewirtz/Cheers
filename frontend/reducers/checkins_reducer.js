import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN } from '../actions/checkin_actions';
import { RECEIVE_BEER } from '../actions/beer_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BREWERY } from '../actions/brewery_actions';

const CheckinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      return Object.assign({}, state, action.checkins.checkins );
    case RECEIVE_CHECKIN:
      return Object.assign({}, state, { [action.checkin.id]: action.checkin });
    case RECEIVE_BEER:
      return Object.assign({}, state, action.checkins );
    case RECEIVE_COMMENT:
      const checkin = Object.assign({}, state[action.comment.checkinId]);
      checkin.commentIds = checkin.commentIds.concat(action.comment.id);
      return Object.assign({}, state, { [action.comment.checkinId]: checkin});
    case RECEIVE_USER:
      return Object.assign({}, state, action.checkins);
    case RECEIVE_BREWERY:
      return Object.assign({}, state, action.checkins);
    default:
      return state;
  }
};

export default CheckinReducer;
