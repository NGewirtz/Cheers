import { RECEIVE_SEARCH_BEERS } from '../actions/beer_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_BEERS:
      return action.beers;
    default:
      return state;
  }
};

export default SearchReducer;
