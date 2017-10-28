import { RECEIVE_ALL_BEERS } from '../actions/beer_actions';

const orderedIdsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers.orderedIds;
    default:
      return state;
  }
};

export default orderedIdsReducer;
