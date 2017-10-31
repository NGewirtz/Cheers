import { RECEIVE_ALL_CHECKINS } from '../actions/checkin_actions';

const checkinIdsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      return state.concat(action.checkins.orderedIds);
    default:
      return state;
  }
};

export default checkinIdsReducer;
