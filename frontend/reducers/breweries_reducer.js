import { RECEIVE_ALL_BREWERIES } from '../actions/beer_actions';

const BreweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BREWERIES:
      return Object.assign({}, action.breweries );
    default:
      return state;
  }
};

export default BreweriesReducer;
