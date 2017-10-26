import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN } from '../actions/checkin_actions';

const CheckinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      return Object.assign({}, state, action.checkins );
    case RECEIVE_CHECKIN:
      return Object.assign({}, state, { [action.checkin.id]: action.checkin });
    default:
      return state;
  }
};

export default CheckinReducer;
