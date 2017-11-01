import { RECEIVE_ALL_CHECKINS, RECEIVE_NEW_CHECKIN } from '../actions/checkin_actions';

const checkinIdsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHECKINS:
      const ids = state.concat(action.checkins.orderedIds);
      return [...new Set(ids)];
    case RECEIVE_NEW_CHECKIN:
      return [action.checkin.id, ...state];
    default:
      return state;
  }
};

export default checkinIdsReducer;
