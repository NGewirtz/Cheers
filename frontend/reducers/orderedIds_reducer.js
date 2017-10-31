import { RECEIVE_ALL_BEERS } from '../actions/beer_actions';

const orderedIdsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      const ids = state.concat(action.beers.orderedIds);
      return [...new Set(ids)];
    default:
      return state;
  }
};

export default orderedIdsReducer;
