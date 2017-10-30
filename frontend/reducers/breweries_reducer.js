import { RECEIVE_ALL_BREWERIES } from '../actions/beer_actions';
import { RECEIVE_BREWERY } from '../actions/brewery_actions';

const BreweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BREWERIES:
      return Object.assign({}, state, action.breweries );
    case RECEIVE_BREWERY:
      return Object.assign({}, state, { [action.brewery.id]: action.brewery });
    default:
      return state;
  }
};

export default BreweriesReducer;
