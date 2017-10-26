import { RECEIVE_ALL_CHECKINS } from '../actions/checkin_actions';

const CheckinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      return Object.assign({}, action.checkins );
    default:
      return state;
  }
};

export default CheckinReducer;
